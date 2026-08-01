export type OutputFormat = "original" | "jpeg" | "png" | "webp" | "avif";
export type Preset = "auto" | "light" | "medium" | "strong" | "custom";
export type JobStatus = "queued" | "reading" | "compressing" | "done" | "error";

/** إعدادات الضغط التي يتحكم بها المستخدم */
export interface CompressionSettings {
  preset: Preset;
  /** يُستخدم فقط عندما يكون preset === "custom" */
  customQuality: number; // 1..100
  format: OutputFormat;
  /** أقصى عرض/ارتفاع بالبكسل. 0 = إبقاء الأبعاد الأصلية */
  maxDimension: number;
  stripExif: boolean;
  keepTransparency: boolean;
}

export interface ImageJob {
  id: string;
  file: File;
  name: string;
  status: JobStatus;
  progress: number;
  error?: string;
  originalSize: number;
  originalUrl: string;
  originalWidth?: number;
  originalHeight?: number;
  compressedBlob?: Blob;
  compressedUrl?: string;
  compressedSize?: number;
  outWidth?: number;
  outHeight?: number;
  qualityUsed?: number;
  outMime?: string;
}

export interface WorkerRequest {
  id: string;
  file: File;
  quality: number; // 0..1
  mime: string;
  maxDimension: number;
  keepTransparency: boolean;
}

export type WorkerResponse =
  | { id: string; type: "progress"; progress: number }
  | {
      id: string;
      type: "done";
      blob: Blob;
      width: number;
      height: number;
      srcWidth: number;
      srcHeight: number;
      mime: string;
      quality: number;
    }
  | { id: string; type: "error"; message: string };
