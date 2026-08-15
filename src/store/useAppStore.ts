"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CompressionSettings, ImageJob } from "@/lib/types";
import { DEFAULT_SETTINGS, MAX_FILES } from "@/lib/constants";
import { compressFile } from "@/lib/compressor";
import { renameWithExt } from "@/lib/utils";

interface Stats {
  imagesCompressed: number;
  bytesSaved: number;
  bytesProcessed: number;
  sessions: number;
}

interface AppState {
  jobs: ImageJob[];
  settings: CompressionSettings;
  stats: Stats;
  isWorking: boolean;
  addFiles: (files: File[]) => Promise<void>;
  removeJob: (id: string) => void;
  clearAll: () => void;
  setSettings: (patch: Partial<CompressionSettings>) => void;
  runAll: () => Promise<void>;
  recompressAll: () => Promise<void>;
  resetStats: () => void;
}

const emptyStats: Stats = { imagesCompressed: 0, bytesSaved: 0, bytesProcessed: 0, sessions: 0 };

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      jobs: [],
      settings: DEFAULT_SETTINGS,
      stats: emptyStats,
      isWorking: false,

      addFiles: async (files) => {
        const room = MAX_FILES - get().jobs.length;
        const accepted = files.slice(0, Math.max(0, room));
        const jobs: ImageJob[] = accepted.map((file) => ({
          id: crypto.randomUUID(),
          file,
          name: file.name,
          status: "queued",
          progress: 0,
          originalSize: file.size,
          originalUrl: URL.createObjectURL(file),
        }));
        set((s) => ({ jobs: [...s.jobs, ...jobs] }));
        await get().runAll();
      },

      removeJob: (id) =>
        set((s) => {
          const job = s.jobs.find((j) => j.id === id);
          if (job) {
            URL.revokeObjectURL(job.originalUrl);
            if (job.compressedUrl) URL.revokeObjectURL(job.compressedUrl);
          }
          return { jobs: s.jobs.filter((j) => j.id !== id) };
        }),

      clearAll: () =>
        set((s) => {
          s.jobs.forEach((j) => {
            URL.revokeObjectURL(j.originalUrl);
            if (j.compressedUrl) URL.revokeObjectURL(j.compressedUrl);
          });
          return { jobs: [] };
        }),

      setSettings: (patch) => set((s) => ({ settings: { ...s.settings, ...patch } })),

      resetStats: () => set({ stats: emptyStats }),

      /** يعالج المهام غير المنتهية فقط، واحدة تلو الأخرى لتفادي ضغط الذاكرة */
      runAll: async () => {
        if (get().isWorking) return;
        set({ isWorking: true });

        const patch = (id: string, data: Partial<ImageJob>) =>
          set((s) => ({ jobs: s.jobs.map((j) => (j.id === id ? { ...j, ...data } : j)) }));

        let processed = 0;

        for (const job of get().jobs) {
          if (job.status === "done" || job.status === "error") continue;
          patch(job.id, { status: "compressing", progress: 5 });
          try {
            const res = await compressFile(job.id, job.file, get().settings, (p) =>
              patch(job.id, { progress: p })
            );
            // لا نُخرج ملفاً أكبر من الأصل — إلا إذا طُلب تغيير أبعاد أو صيغة،
            // فالمستخدم حينها يريد الناتج نفسه لا الأصل مهما كان حجمه
            const s = get().settings;
            const asked = s.format !== "original" || s.maxDimension > 0;
            const useOriginal = !asked && res.blob.size >= job.file.size;
            const blob = useOriginal ? job.file : res.blob;
            const url = URL.createObjectURL(blob);

            patch(job.id, {
              status: "done",
              progress: 100,
              compressedBlob: blob,
              compressedUrl: url,
              compressedSize: blob.size,
              originalWidth: res.srcWidth,
              originalHeight: res.srcHeight,
              outWidth: res.width,
              outHeight: res.height,
              qualityUsed: res.quality,
              outMime: useOriginal ? job.file.type : res.mime,
              name: renameWithExt(job.name, useOriginal ? job.file.type : res.mime),
            });

            processed++;
            set((s) => ({
              stats: {
                ...s.stats,
                imagesCompressed: s.stats.imagesCompressed + 1,
                bytesProcessed: s.stats.bytesProcessed + job.originalSize,
                bytesSaved: s.stats.bytesSaved + Math.max(0, job.originalSize - blob.size),
              },
            }));
          } catch (err) {
            patch(job.id, {
              status: "error",
              progress: 0,
              error: err instanceof Error ? err.message : "failed",
            });
          }
        }

        if (processed > 0) set((s) => ({ stats: { ...s.stats, sessions: s.stats.sessions + 1 } }));
        set({ isWorking: false });
      },

      /** يعيد ضبط كل المهام إلى قائمة الانتظار ثم يضغطها بالإعدادات الحالية */
      recompressAll: async () => {
        set((s) => ({
          jobs: s.jobs.map((j) => {
            if (j.compressedUrl) URL.revokeObjectURL(j.compressedUrl);
            return {
              ...j,
              status: "queued" as const,
              progress: 0,
              error: undefined,
              compressedBlob: undefined,
              compressedUrl: undefined,
              compressedSize: undefined,
              name: j.file.name,
            };
          }),
        }));
        await get().runAll();
      },
    }),
    {
      name: "leanpix",
      storage: createJSONStorage(() => localStorage),
      // الملفات وعناوين blob غير قابلة للتخزين — نحفظ الإعدادات والإحصائيات فقط
      partialize: (s) => ({ settings: s.settings, stats: s.stats }),
      /**
       * الدمج الافتراضي سطحي، فتحلّ الإعدادات المحفوظة محل الافتراضية بالكامل
       * ويصل أي إعداد أضفناه لاحقاً غير مُعرّف. ندمج المستوى الثاني يدوياً.
       */
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<AppState>;
        return {
          ...current,
          ...p,
          settings: { ...current.settings, ...(p.settings ?? {}) },
          stats: { ...current.stats, ...(p.stats ?? {}) },
        };
      },
    }
  )
);
