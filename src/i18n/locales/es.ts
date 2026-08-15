import type ar from "./ar";

const es: typeof ar = {
  nav: {
    home: "Inicio",
    about: "Quiénes somos",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
    faq: "Preguntas frecuentes",
  },
  brand: { name: "LeanPix", tagline: "Comprime imágenes en el navegador" },
  hero: {
    title: "Comprime imágenes sin subirlas a ningún servidor",
    subtitle:
      "Reduce el peso de tus imágenes hasta un 80 % sin diferencia visible: comprime, convierte y cambia el tamaño de JPG, PNG, GIF, WebP y AVIF. Todo ocurre en tu navegador, así que tus archivos no salen de tu dispositivo y no hay ninguna subida que esperar.",
    cta: "Elegir imágenes",
    drop: "o arrástralas hasta aquí",
    formats: "JPG · PNG · WebP · AVIF · GIF · hasta 25 MB por imagen",
  },
  dropzone: { active: "Suelta para empezar", hint: "Hasta {n} imágenes a la vez" },
  settings: {
    title: "Ajustes de compresión",
    preset: "Nivel de compresión",
    max: "Sin comprimir",
    auto: "Automático (recomendado)",
    light: "Suave",
    medium: "Medio",
    strong: "Fuerte",
    custom: "Calidad personalizada",
    quality: "Calidad",
    format: "Formato de salida",
    original: "Igual que el original",
    resize: "Dimensión máxima (px)",
    noResize: "Sin cambios",
    stripExif: "Eliminar datos EXIF",
    keepAlpha: "Mantener transparencia",
    apply: "Volver a comprimir con estos ajustes",
    social: "Tamaños habituales",
    target: "Peso objetivo del archivo",
    noTarget: "Sin objetivo",
    targetHint:
      "Al fijar un objetivo, la calidad se ajusta automáticamente para alcanzarlo y prevalece sobre el nivel de compresión elegido arriba.",
  },
  social: {
    post: "Publicación",
    story: "Historia",
    cover: "Portada",
    thumb: "Miniatura",
    product: "Producto",
  },
  howto: { title: "Cómo se usa" },
  contact: {
    kind: "¿Sobre qué nos escribes?",
    kinds: ["Informe de error", "Sugerencia", "Colaboración", "Consulta general"],
    name: "Nombre",
    message: "Mensaje",
    send: "Enviar",
    note: "El botón abre tu aplicación de correo con el mensaje ya redactado: no tenemos ningún servidor que reciba formularios ni guardamos tus datos. Solemos responder en 24–48 horas.",
  },
  pdf: {
    pick: "Elige las imágenes para convertirlas en PDF",
    pickHint: "Puedes elegir varias a la vez — cada imagen será una página",
    pageSize: "Tamaño de página",
    a4: "A4",
    letter: "Carta",
    fit: "Ajustar a la imagen",
    margin: "Margen (pt)",
    order: "Orden de las páginas",
    orderHint: "Arrastra para reordenar — este será el orden de las páginas del archivo",
    download: "Descargar PDF",
    building: "Creando…",
    addMore: "Añadir imágenes",
    failed: "No se pudo crear el archivo",
  },
  icon: {
    pick: "Elige una imagen para convertirla en icono",
    pickHint: "Un PNG o SVG cuadrado con fondo transparente da el mejor resultado",
    fit: "Ajuste al cuadrado",
    contain: "Imagen completa",
    cover: "Rellenar y recortar",
    sizes: "Tamaños a generar",
    downloadIco: "Descargar favicon.ico",
    downloadPack: "Descargar el paquete completo",
  },
  job: {
    original: "Original",
    compressed: "Comprimida",
    before: "Peso antes",
    after: "Peso después",
    saved: "Ahorro",
    dimensions: "Dimensiones",
    quality: "Calidad aplicada",
    compare: "Comparar",
    download: "Descargar",
    remove: "Quitar",
    copyImage: "Copiar imagen",
    copied: "Copiada",
    copyFailed: "No se pudo copiar",
    share: "Compartir",
    working: "Comprimiendo…",
    queued: "En cola",
    failed: "No se pudo comprimir esta imagen",
    dragHandle: "Arrastra para comparar",
  },
  actions: {
    downloadAll: "Descargar todo (ZIP)",
    downloadAllJpeg: "Descargar todo en JPG",
    converting: "Convirtiendo…",
    recompress: "Volver a comprimir",
    clear: "Borrar todo",
    totalSaved: "Has ahorrado {size} de {total}",
  },
  errors: {
    size: "El archivo supera el límite de 25 MB",
    type: "Ese archivo no es una imagen compatible",
    empty: "El archivo está vacío",
    limit: "Hasta {n} imágenes a la vez",
  },
  stats: {
    title: "Panel de uso",
    images: "Imágenes comprimidas",
    saved: "Espacio ahorrado",
    processed: "Datos procesados",
    ratio: "Ahorro medio",
    reset: "Reiniciar estadísticas",
    note: "Estas cifras se quedan en tu navegador.",
  },
  features: {
    title: "Por qué LeanPix",
    privacy: {
      t: "Tus archivos no salen de tu dispositivo",
      d: "Todo el procesamiento ocurre en el navegador mediante Web Workers.",
    },
    speed: { t: "Resultados inmediatos", d: "Sin subidas ni colas en un servidor." },
    batch: { t: "Lotes grandes", d: "Comprime hasta 30 imágenes y descárgalas en un ZIP." },
    convert: {
      t: "Convierte y redimensiona",
      d: "Entre JPG, PNG, WebP y AVIF, con cambio de tamaño.",
    },
  },
  footer: { rights: "Todos los derechos reservados", made: "Funciona por completo en tu navegador" },
  toolsNav: { title: "Herramientas", others: "Otras herramientas" },
  tools: {
    compress: {
      nav: "Comprimir imágenes",
      short: "Comprimir",
      h1: "Comprime imágenes en línea gratis y sin subirlas",
      meta: "Comprime JPG, PNG, GIF, WebP y AVIF dentro de tu navegador. Hasta un 80 % menos de peso sin diferencia visible, sin subir nada a ningún servidor y sin límite diario.",
      intro:
        "Suelta tus imágenes y la compresión empieza al instante dentro de tu navegador. Sin subidas, sin colas, sin límite diario, y ninguna imagen sale de tu dispositivo.",
      steps: [
        "Arrastra tus imágenes a la página o pulsa «Elegir imágenes» — hasta 30 a la vez.",
        "Ajusta el nivel de compresión, o indica un peso objetivo en KB y lo alcanzaremos por ti.",
        "Abre «Comparar» para ver la diferencia frente al original antes de decidir.",
        "Descarga una imagen o todo el lote en un ZIP.",
      ],
      body: [
        {
          h: "Por qué importa el peso de una imagen",
          p: "Las imágenes son la mayor parte de lo que pesa una página. Una página lenta significa una visita que se marcha antes de ver tu producto, y una posición más débil en el buscador, porque Google mide la velocidad de carga dentro de la experiencia de página. Pasar una imagen de 4 MB a 400 KB reduce su tiempo de carga unas diez veces sin que nadie note la diferencia.",
        },
        {
          h: "Cómo se elige el nivel de calidad",
          p: "El modo automático examina el peso y el formato de cada imagen y elige una calidad solo para ella: las fotos grandes admiten una compresión más fuerte sin que se note, y las pequeñas requieren más cuidado. Si quieres el control total, elige «Calidad personalizada», mueve el control entre 1 y 100 y juzga tú mismo el resultado.",
        },
        {
          h: "Comprimir un archivo JPG",
          p: "JPG es el formato fotográfico más extendido y el que mejor responde a la compresión. Una foto de cámara de 5 MB suele bajar por debajo de 1 MB sin diferencia perceptible, porque su codificación descarta primero el detalle que el ojo no distingue. Arrastra tus archivos y deja el modo automático, o fija un peso objetivo en KB si te limita el formulario de alguna plataforma.",
        },
        {
          h: "Comprimir imágenes GIF",
          p: "GIF pesa mucho porque guarda varios fotogramas con una codificación antigua. Lo convertimos en imagen fija — PNG si hay transparencia, JPG si no — y el peso cae de forma drástica. Si necesitas conservar la animación, la alternativa correcta es un vídeo corto en MP4 o WebM, no un GIF comprimido.",
        },
        {
          h: "Formatos admitidos y límites",
          p: "JPG, PNG, WebP, AVIF y GIF, hasta 25 MB por imagen y 30 imágenes por lote. Puedes mantener el formato original o convertirlo a uno más moderno mientras comprimes.",
        },
      ],
      faq: [
        {
          q: "¿Se suben mis imágenes a un servidor?",
          a: "No. Todo ocurre en tu navegador mediante Web Workers y no se envía ni un byte de tus imágenes a ningún servidor, ni al nuestro ni a otro.",
        },
        {
          q: "¿Cuánto voy a ahorrar?",
          a: "Depende de la imagen y del formato. Los JPG fotográficos suelen ahorrar entre un 60 % y un 85 %. Los PNG de colores planos a menudo ahorran más, sobre todo si se convierten a WebP.",
        },
        {
          q: "¿Se pierde calidad?",
          a: "La compresión con pérdida descarta detalle que tu ojo no resuelve a un tamaño normal de visualización. Usa «Comparar» para juzgarlo tú mismo antes de descargar y sube la calidad si no te convence.",
        },
        {
          q: "¿Hay límite diario?",
          a: "No. Sin cuentas, sin suscripción y sin contador. Los únicos límites son 25 MB por imagen y 30 imágenes por lote, y son límites de la memoria del navegador, no del servicio.",
        },
        {
          q: "¿Cómo comprimo una imagen a un peso exacto?",
          a: "Elige un valor en «Peso objetivo del archivo» — 100, 200 o 500 KB — y probamos niveles de calidad sucesivos hasta acercarnos lo máximo posible sin superar tu objetivo.",
        },
        {
          q: "¿Funciona en el móvil?",
          a: "Sí, en iPhone y Android directamente desde el navegador y sin instalar nada. El procesamiento usa la memoria del dispositivo, así que un lote muy grande puede ir más lento en un teléfono antiguo.",
        },
        {
          q: "¿Funciona sin conexión?",
          a: "Una vez cargada la página, la compresión no necesita conexión porque todo ocurre en local.",
        },
        {
          q: "¿Necesito una cuenta?",
          a: "No. Sin registro, sin correo y sin tarjeta. Abre la página y úsala.",
        },
        {
          q: "¿Cuál es el peso máximo por archivo?",
          a: "25 MB por imagen. El límite protege la memoria del navegador, no restringe el uso.",
        },
        {
          q: "¿Se eliminan los datos EXIF al comprimir?",
          a: "Sí de forma predeterminada, porque la recodificación los descarta. Puedes desactivar la opción en el panel de ajustes si prefieres conservarlos.",
        },
        {
          q: "¿En qué os diferenciáis de otros compresores?",
          a: "La mayoría sube tus imágenes a su servidor y te las devuelve. Nosotros no subimos nada, y por eso no hay cola, ni límite diario, ni la duda de qué ocurre después con tus archivos.",
        },
        {
          q: "¿Admitís AVIF?",
          a: "Sí, tanto para comprimir como para convertir. Ahorra más que WebP, aunque su codificación es más lenta.",
        },
      ],
    },
    resize: {
      nav: "Cambiar el tamaño",
      short: "Tamaño",
      h1: "Cambia el tamaño de tus imágenes por lotes",
      meta: "Reduce tus imágenes a 1920 px, 1280 px o la medida que necesites, conservando la proporción, dentro de tu navegador y sin subir nada.",
      intro:
        "Elige una dimensión máxima y todas las imágenes se reducirán a ella conservando su proporción. Aquí el modo predeterminado es «Sin comprimir»: solo se cambia el tamaño, sin tocar la calidad. Las imágenes menores que el límite se quedan como están.",
      steps: [
        "Arrastra tus imágenes a la página — hasta 30 por lote.",
        "Elige la dimensión máxima, o pulsa un tamaño ya preparado como «Publicación» o «Producto».",
        "Comprueba las dimensiones resultantes en la ficha de cada imagen.",
        "Descarga una imagen o todo el lote.",
      ],
      body: [
        {
          h: "Por qué cambiar el tamaño antes de comprimir",
          p: "El mayor desperdicio en las imágenes de un sitio es servir una foto de 6000 px de ancho en un hueco de 800 px. El navegador la descarga entera y luego la reduce para mostrarla, así que pagas por todos los píxeles sobrantes. Recortar dimensiones ahorra mucho más que subir la compresión.",
        },
        {
          h: "Qué medida elegir",
          p: "1920 px basta para una imagen que ocupe todo el ancho, 1280 px va bien para artículos y 800 px sobra para miniaturas de producto en una cuadrícula. Para pantallas de alta densidad, duplica tu medida una sola vez.",
        },
        {
          h: "La proporción siempre se conserva",
          p: "El límite se aplica al lado más largo y el otro se calcula a partir de él, así que nada se deforma y no tienes que calcular medidas imagen por imagen.",
        },
      ],
      faq: [
        {
          q: "¿Se recorta la imagen?",
          a: "No. La imagen entera se reduce conservando su proporción y no se recorta nada.",
        },
        {
          q: "¿Se amplían las imágenes pequeñas?",
          a: "No. Una imagen menor que el límite elegido conserva sus dimensiones originales. Ampliar cuesta nitidez y no inventa detalle.",
        },
        {
          q: "¿Puedo cambiar el tamaño sin comprimir?",
          a: "Sí, y es lo predeterminado en esta página: el nivel «Sin comprimir». Los PNG se recodifican sin pérdida y no pierden absolutamente nada; los JPG se codifican a la máxima calidad, ya que cambiar el número de píxeles obliga a recodificar.",
        },
        {
          q: "¿Qué tamaño tienen las imágenes de Instagram?",
          a: "Una publicación cuadrada son 1080 px y una historia 1080 × 1920. Pulsa «Publicación» o «Historia» en los ajustes y el límite se fija por ti.",
        },
        {
          q: "¿Qué tamaño deben tener las fotos de producto?",
          a: "1200 px cubre la mayoría de tiendas y deja margen para el zoom. El botón «Producto» lo fija directamente.",
        },
        {
          q: "¿Cómo redimensiono muchas imágenes al mismo tamaño?",
          a: "Suéltalas todas a la vez y elige la dimensión máxima una sola vez: se aplica a todo el lote.",
        },
        {
          q: "¿Se deformará la imagen?",
          a: "No. El límite se aplica al lado más largo y el otro se deduce de la proporción, así que nada se estira ni se aplasta.",
        },
      ],
    },
    convert: {
      nav: "Convertir formato",
      short: "Convertir",
      h1: "Convierte imágenes a WebP, AVIF, JPG y PNG",
      meta: "Convierte entre WebP, AVIF, JPG y PNG dentro de tu navegador, por lotes y sin subir nada a ningún servidor.",
      intro:
        "Elige el formato de salida y todas las imágenes se convertirán y comprimirán en la misma pasada. Aquí el formato predeterminado es WebP, la mejor opción general para la web hoy.",
      steps: [
        "Arrastra tus imágenes en cualquier formato compatible.",
        "Elige el formato de salida — WebP viene seleccionado.",
        "Ajusta la calidad si lo necesitas, o fija un peso objetivo en KB.",
        "Descarga los resultados de uno en uno o todos juntos.",
      ],
      body: [
        {
          h: "¿WebP o AVIF?",
          p: "WebP pesa entre un 25 % y un 35 % menos que JPG con la misma calidad y lo admiten todos los navegadores en uso, lo que lo convierte en la opción segura. AVIF baja bastante más, pero codifica más despacio y es más reciente. Para tiendas y sitios generales, empieza por WebP.",
        },
        {
          h: "Cuándo quedarse en JPG o PNG",
          p: "Quédate en JPG si vas a subir las imágenes a una plataforma que no acepta otra cosa. Quédate en PNG si una imagen necesita transparencia real y prefieres no pasarla a WebP, aunque WebP también admite transparencia y con menos peso.",
        },
        {
          h: "La transparencia según el formato",
          p: "JPG no admite transparencia en absoluto, así que al convertir a ese formato rellenamos las zonas transparentes de blanco en lugar de dejar que se vuelvan negras. WebP, AVIF y PNG la conservan tal cual.",
        },
      ],
      faq: [
        {
          q: "¿Mi navegador admite WebP?",
          a: "Sí. Todos los navegadores en uso admiten WebP: Chrome, Firefox, Safari y Edge.",
        },
        {
          q: "¿Qué ocurre con los GIF?",
          a: "Se convierten en imagen fija, porque un GIF animado no puede codificarse mediante canvas. Elegimos PNG para conservar la transparencia, o JPG si la has desactivado.",
        },
        {
          q: "¿Puedo convertir sin perder calidad?",
          a: "Convertir a PNG es sin pérdida. WebP, AVIF y JPG son con pérdida de forma predeterminada: sube la calidad a 95 o más para acercarte al original.",
        },
        {
          q: "¿Cómo convierto JPG a WebP?",
          a: "Suelta tus JPG y elige WebP como formato de salida; ya viene seleccionado en esta página, así que normalmente no tienes que cambiar nada.",
        },
        {
          q: "¿Cómo convierto PNG a JPG?",
          a: "Elige JPEG como formato de salida. Ten en cuenta que la transparencia se rellenará de blanco, porque JPG no puede almacenarla.",
        },
        {
          q: "¿Cómo convierto WebP a JPG?",
          a: "Suelta tus archivos WebP y elige JPEG. Es útil para subir a plataformas antiguas que no aceptan WebP.",
        },
        {
          q: "¿Qué pesa menos, WebP o AVIF?",
          a: "AVIF suele pesar bastante menos con la misma calidad, pero codifica notablemente más despacio en lotes grandes.",
        },
        {
          q: "¿Puedo convertir formatos mezclados de una vez?",
          a: "Sí. Suelta JPG, PNG y WebP juntos y elige un único formato de salida: todo se unifica en él.",
        },
      ],
    },
    pdf: {
      nav: "Imágenes a PDF",
      short: "PDF",
      h1: "Convierte imágenes a PDF gratis",
      meta: "Reúne una o varias imágenes en un único PDF dentro de tu navegador: tu orden, tu tamaño de página y nada subido a ningún servidor.",
      intro:
        "Elige tus imágenes, ordénalas como quieras y las reunimos en un solo PDF. Cada imagen será una página, y la conversión ocurre en tu navegador, así que nada sale de tu dispositivo.",
      steps: [
        "Elige las imágenes que quieres convertir — hasta 30 a la vez.",
        "Arrástralas hasta dejarlas en el orden que quieras.",
        "Fija el tamaño de página y el margen.",
        "Pulsa «Descargar PDF».",
      ],
      body: [
        {
          h: "¿Por qué convertir imágenes a PDF?",
          p: "Un solo archivo es más fácil de enviar, imprimir y archivar que diez imágenes sueltas. Administraciones, bancos y sistemas de solicitudes suelen pedir PDF porque conserva el orden y el formato y se abre igual en cualquier dispositivo, a diferencia de una carpeta de imágenes que puede reordenarse o llegar incompleta.",
        },
        {
          h: "¿A4 o ajustar a la imagen?",
          p: "Elige A4 o Carta si vas a imprimir o a subirlo a un sistema que espera un tamaño estándar; la imagen se centra en la página con un margen que tú controlas. Elige «Ajustar a la imagen» cuando el archivo sea solo para ver en pantalla, y cada página saldrá exactamente del tamaño de su imagen, sin franjas blancas.",
        },
        {
          h: "El orden lo decides tú",
          p: "Arrastra las imágenes para reordenarlas antes de convertir. Lo que ves en pantalla es el orden de las páginas dentro del archivo, y puedes quitar cualquier imagen o añadir más antes de descargar.",
        },
      ],
      faq: [
        {
          q: "¿Cómo convierto una imagen a PDF?",
          a: "Elige la imagen en la herramienta de arriba, escoge un tamaño de página y pulsa «Descargar PDF». Sin registro, sin esperas y sin marca de agua.",
        },
        {
          q: "¿Puedo juntar varias imágenes en un solo archivo?",
          a: "Sí, y es lo predeterminado. Selecciónalas todas y cada una será una página del mismo archivo, en el orden que fijes arrastrando.",
        },
        {
          q: "¿Se suben mis imágenes a un servidor?",
          a: "No. El archivo se construye íntegramente en tu navegador y no se envía ni un byte de tus imágenes a ninguna parte.",
        },
        {
          q: "¿Qué formatos se aceptan?",
          a: "JPG, PNG, WebP y GIF: cualquier imagen que tu navegador pueda abrir. Los PNG conservan su transparencia dentro del archivo.",
        },
        {
          q: "¿Puedo convertir mis imágenes a PDF en tamaño A4?",
          a: "Sí, elige A4 en «Tamaño de página». Cada imagen se centra en una página A4 con el margen que tú ajustes, y la página gira automáticamente si la imagen es apaisada.",
        },
        {
          q: "¿Cuántas imágenes puedo convertir?",
          a: "Hasta 30 por archivo. El límite protege la memoria del navegador, no restringe el uso.",
        },
        {
          q: "¿El archivo pesará mucho?",
          a: "La compresión del PDF está activada de forma predeterminada. Para un archivo mucho más ligero, comprime antes tus imágenes con la herramienta de compresión y conviértelas después aquí.",
        },
        {
          q: "¿Puedo ordenar las páginas?",
          a: "Sí, arrastra cualquier imagen a su nueva posición antes de convertir. El número sobre cada imagen indica su página.",
        },
      ],
    },
    icon: {
      nav: "Imagen a icono",
      short: "Icono",
      h1: "Convierte imágenes en iconos y favicons",
      meta: "Convierte cualquier imagen en un favicon.ico con varios tamaños y en iconos PNG listos para tu sitio y tu aplicación, dentro de tu navegador y sin subir nada.",
      intro:
        "Elige una imagen y generamos un juego de iconos completo: un favicon.ico con seis tamaños dentro, más iconos PNG para cada medida que piden los navegadores y los sistemas operativos.",
      steps: [
        "Elige una imagen — preferiblemente un PNG cuadrado con fondo transparente.",
        "Escoge el modo de ajuste y los tamaños que quieras.",
        "Revisa cada tamaño antes de descargar.",
        "Descarga solo el favicon.ico, o el paquete completo con los iconos PNG y el manifiesto.",
      ],
      body: [
        {
          h: "Por qué no basta con una sola imagen",
          p: "Los navegadores piden 16 y 32 píxeles para la pestaña, iOS pide 180 para la pantalla de inicio y Android pide 192 y 512 para el manifiesto. Entregar una sola imagen grande deja que cada dispositivo la reduzca por su cuenta, y a tamaños pequeños el resultado se ve sucio, así que generamos cada medida por separado con un suavizado de alta calidad.",
        },
        {
          h: "Qué es un archivo ICO",
          p: "Un único archivo que contiene varias imágenes en distintos tamaños, de las que el sistema toma la que encaja en cada sitio. Dentro ponemos 16, 32, 48, 64, 128 y 256 píxeles, la cobertura que necesitan entre navegadores y Windows.",
        },
        {
          h: "¿Imagen completa o rellenar y recortar?",
          p: "Los iconos son cuadrados y tu imagen normalmente no lo es. «Imagen completa» la conserva entera y añade márgenes transparentes, lo que va bien para logotipos. «Rellenar y recortar» ocupa todo el cuadrado y recorta los bordes, lo que va bien para fotografías.",
        },
      ],
      faq: [
        {
          q: "¿Qué diferencia hay entre favicon.ico y los iconos PNG?",
          a: "El ICO reúne varios tamaños y lo entiende cualquier navegador, incluso los antiguos. Los PNG sueltos son los que necesitan iOS, Android y el manifiesto web. El paquete completo te da ambos.",
        },
        {
          q: "¿Dónde coloco los archivos?",
          a: "En la raíz de tu sitio, y después añade las etiquetas que aparecen bajo la herramienta dentro del head de tus páginas.",
        },
        {
          q: "¿Cuál es una buena imagen de partida?",
          a: "Una imagen cuadrada con fondo transparente de 512 píxeles o más. Los logotipos sencillos se leen mucho mejor a 16 píxeles que un dibujo lleno de detalle.",
        },
        {
          q: "¿Se conserva la transparencia?",
          a: "Sí. Todos los tamaños se generan en PNG, dentro y fuera del ICO, y PNG admite transparencia por completo.",
        },
        {
          q: "¿Se admite SVG?",
          a: "Sí, y es la mejor fuente posible: se dibuja al tamaño exacto de cada icono, así que el resultado sale perfectamente nítido.",
        },
        {
          q: "¿Qué tamaño tiene el icono de iOS?",
          a: "180 píxeles, para la etiqueta apple-touch-icon. Viene marcado por defecto en la lista de tamaños.",
        },
        {
          q: "¿Se sube mi imagen a un servidor?",
          a: "No. Todo se genera en tu navegador, y el propio archivo ICO se construye byte a byte en la página.",
        },
        {
          q: "¿Qué es site.webmanifest?",
          a: "Un archivo que indica a Android qué iconos usar cuando alguien añade tu sitio a la pantalla de inicio. Lo generamos ya listo dentro del paquete.",
        },
      ],
    },
    exif: {
      nav: "Eliminar datos EXIF",
      short: "EXIF",
      h1: "Elimina los datos EXIF de tus imágenes",
      meta: "Borra los metadatos de cámara y la ubicación GPS de tus fotos antes de publicarlas, dentro de tu navegador y sin subir nada.",
      intro:
        "Cada foto que hace tu teléfono lleva datos ocultos: el modelo del aparato, el momento en que se tomó y, casi siempre, las coordenadas exactas del lugar donde estabas. Esta herramienta los elimina.",
      steps: [
        "Arrastra a la página las fotos que vas a publicar.",
        "Comprueba que «Eliminar datos EXIF» está activado — aquí lo está por defecto.",
        "Elige el nivel «Sin comprimir» si quieres el mínimo cambio posible en la calidad.",
        "Descarga las imágenes limpias y publícalas con tranquilidad.",
      ],
      body: [
        {
          h: "Qué revelan tus fotos",
          p: "Los datos EXIF pueden incluir latitud y longitud con precisión de metros, la hora exacta de captura y, a veces, el modelo y el número de serie del teléfono. Publicar una foto hecha en casa en un sitio web o en un portal de compraventa puede difundir tu dirección sin que te des cuenta.",
        },
        {
          h: "Cómo se eliminan",
          p: "La imagen se vuelve a dibujar sobre un lienzo nuevo y se recodifica desde cero. El resultado conserva los píxeles y nada heredado, un método más fiable que intentar vaciar los campos de metadatos uno por uno.",
        },
        {
          h: "La orientación se mantiene",
          p: "Algunas herramientas dejan las fotos tumbadas, porque la rotación vivía en los metadatos que borraron. Nosotros aplicamos la rotación EXIF a los píxeles antes de descartar los datos, así que la imagen se queda como la ves.",
        },
      ],
      faq: [
        {
          q: "¿El borrado es definitivo?",
          a: "Sí. El archivo resultante se recodifica y no conserva ningún metadato del original. Tu archivo original en el disco queda intacto.",
        },
        {
          q: "¿Afecta a la calidad de la imagen?",
          a: "La recodificación es lo que hace fiable el borrado. Elige el nivel «Sin comprimir» para mantener la calidad prácticamente idéntica al original.",
        },
        {
          q: "¿Se elimina la ubicación GPS?",
          a: "Sí. Las coordenadas GPS forman parte de los datos EXIF y se eliminan junto con todo lo demás.",
        },
        {
          q: "¿Cómo sé si mi foto lleva datos EXIF?",
          a: "Casi todo lo tomado con un teléfono o una cámara los lleva. Las capturas de pantalla y los gráficos diseñados normalmente no.",
        },
        {
          q: "¿Las plataformas los borran automáticamente?",
          a: "Algunas lo hacen al publicar y otras no, sobre todo cuando el archivo se envía como original por chat o correo. No cuentes con ello.",
        },
        {
          q: "¿Mi foto acabará girada?",
          a: "No. Aplicamos la rotación EXIF a los píxeles antes de descartar los datos, un fallo habitual en otras herramientas.",
        },
        {
          q: "¿Puedo limpiar varias fotos a la vez?",
          a: "Sí, hasta 30 imágenes por lote.",
        },
        {
          q: "¿Guardáis una copia de mis fotos?",
          a: "No. Tus fotos nunca llegan hasta nosotros: todo ocurre dentro de tu navegador.",
        },
      ],
    },
  },
};

/**
 * متن الصفحات الثابتة (من نحن، الخصوصية، الشروط، الأسئلة، اتصل بنا) — كل لغة
 * نصّها الكامل هنا لا كتفريع ثنائي داخل كل صفحة، فتُضاف اللغة بملف واحد.
 */
export const pages = {
  about: {
    title: "Quiénes somos",
    body: [
      {
        p: "LeanPix comprime imágenes por completo dentro de tu navegador. Tus archivos nunca se suben, no se guardan ni los vemos nosotros.",
      },
      { h: "¿Por qué en el navegador?", p: "Subir imágenes implica esperar, límites de tamaño y confiar en un tercero. Los navegadores modernos codifican JPEG, WebP y AVIF en local con una calidad excelente, así que hacemos ese trabajo en Web Workers y mantenemos la interfaz fluida incluso con lotes grandes." },
      { h: "Cómo se elige la calidad", p: "El modo automático equilibra peso y calidad según el formato y el tamaño del archivo. Las fotos grandes admiten una compresión más fuerte sin pérdida visible; las pequeñas se tratan con más cuidado. Ajusta la calidad manualmente de 1 a 100 cuando quieras el control total." },
      { h: "Por qué creamos LeanPix", p: "La mayoría de los compresores de imágenes te piden una cosa antes de ayudarte: subir tus archivos a su servidor. Parece trivial y no lo es — fotos de producto antes de un lanzamiento, documentos personales, fotos familiares con las coordenadas de dónde se tomaron. Todo eso va a una máquina que no controlas, durante un tiempo que nadie te dice." },
      { p: "Creamos LeanPix con la idea de que esa petición ya no es necesaria. El navegador que tienes delante puede hacer todo el trabajo, así que tus imágenes no tienen por qué salir de tu dispositivo para comprimirse." },
      { h: "Nuestro compromiso", p: "No recibimos tus imágenes. No es una promesa, es la arquitectura — no existe ningún servidor nuestro que las acepte. Puedes desconectarte tras cargar la página y seguir trabajando." },
      { p: "Sin cuentas ni límites diarios. Sin registro, sin correo, sin tarjeta, y sin contador que te frene en la décima imagen. Los únicos límites son 25 MB por imagen y 30 por lote, y pertenecen a la memoria de tu navegador, no a nuestro servicio." },
      { p: "Sin marca de agua. Lo que llega a tu dispositivo es tu imagen, no tu imagen firmada por nosotros." },
      { h: "Para quién es", p: "Para quienes preparan decenas de fotos de producto antes de subirlas, para quienes ven cómo las imágenes penalizan la velocidad de su web, para desarrolladores que necesitan WebP, AVIF o un paquete de iconos en un minuto, y para cualquiera que quiera borrar la ubicación de una foto antes de publicarla." },
    ],
    links: [
      ["compress", "Comprimir"],
      ["resize", "Redimensionar"],
      ["convert", "Convertir"],
      ["pdf", "Imágenes a PDF"],
      ["icon", "Generador de iconos"],
      ["exif", "Eliminar EXIF"],
    ],
    startHere: "Empieza aquí",
  },
  privacy: {
    title: "Privacidad",
    sections: [
      { h: "Tus imágenes", p: "Las imágenes se procesan localmente en tu navegador y nunca se envían a nuestros servidores. Desaparecen de la memoria en cuanto cierras la pestaña o pulsas «Borrar todo»." },
      { h: "Qué guardamos", p: "Tus ajustes de compresión y tus contadores de uso se guardan en el almacenamiento local del navegador. Nunca salen de tu dispositivo y puedes reiniciarlos desde el panel de uso." },
      { h: "Publicidad", p: "Mostramos anuncios mediante Google AdSense para cubrir el coste de mantener el sitio. Google y sus socios usan cookies para mostrar anuncios según tus visitas previas a este sitio u otros, y pueden recoger datos como la IP, el tipo de dispositivo y el navegador." },
      { p: "Nada de esto llega a tus imágenes: se procesan dentro de tu navegador y nunca se envían a nadie, tampoco a Google." },
      { p: "Puedes desactivar la publicidad personalizada en la configuración de anuncios de Google, o leer cómo usa Google los datos en los sitios de sus socios." },
      { h: "Otras cookies", p: "No colocamos cookies de seguimiento propias ni usamos análisis de terceros. Lo que guardamos se limita al almacenamiento local descrito arriba." },
      { h: "Datos EXIF", p: "Con «Eliminar datos EXIF» activado — la opción predeterminada — se eliminan los metadatos de cámara y ubicación del archivo resultante." },
    ],
  },
  terms: {
    title: "Términos",
    sections: [
      { h: "Un servicio gratuito", p: "LeanPix es gratuito, sin registro y sin límite de uso más allá de los límites técnicos indicados abajo." },
      { h: "Límites", p: "25 MB por imagen y 30 imágenes por lote. Son límites de la memoria del navegador, no del servicio." },
      { h: "Tu contenido", p: "Eres responsable de las imágenes que proceses. No accedemos a ellas ni podemos hacerlo, así que no podemos revisarlas ni moderarlas." },
      { h: "Sin garantía", p: "El servicio se ofrece tal cual. No garantizamos disponibilidad continua ni resultados concretos de compresión." },
      { h: "Cambios", p: "Podemos actualizar estos términos según evolucione el servicio; la fecha de la última revisión aparecerá aquí." },
    ],
  },
  contact: {
    intro: "Informa de un error, pide un formato o sugiere una mejora — lo leemos todo.",
  },
  faq: [
    ["¿Se suben mis imágenes?", "No. La compresión ocurre en tu navegador mediante Web Workers; los archivos nunca salen de tu dispositivo."],
    ["¿Cuánto ahorro?", "Normalmente entre un 40 % y un 80 %, según el formato y el contenido. Las fotografías se comprimen mucho mejor que los gráficos planos."],
    ["¿Se pierde calidad?", "El modo automático apunta a una calidad donde la diferencia no se aprecia. Usa el comparador para comprobarlo antes de descargar."],
    ["¿Qué pasa con los GIF animados?", "Tratamos el primer fotograma de los GIF estáticos y lo convertimos a PNG o JPEG. La animación aún no es compatible."],
    ["¿Se conserva la transparencia?", "Sí con PNG, WebP y AVIF. El JPEG no tiene canal alfa, así que el fondo se rellena de blanco."],
    ["¿Cuáles son los límites?", "25 MB por imagen y 30 imágenes por lote, para proteger la memoria del navegador."],
    ["¿Necesito una cuenta?", "No. Sin registro, sin correo, sin tarjeta. Abre la página y usa cualquier herramienta. No guardamos nada tuyo porque no recibimos nada."],
    ["¿Es completamente gratis?", "Sí, sin marca de agua y sin límite diario. El procesamiento ocurre en tu propio dispositivo, así que no nos cuesta servidores que cobrar. Los anuncios cubren los gastos de funcionamiento."],
    ["¿Cómo fijo una calidad personalizada?", "En el panel de ajustes elige «Calidad personalizada» y mueve el control entre 1 y 100. O elige «Sin comprimir» si quieres cambiar dimensiones o formato sin tocar la calidad."],
    ["¿En qué os diferenciáis de TinyPNG o iLoveIMG?", "Esas herramientas suben tus imágenes a su servidor y te las devuelven. Nosotros no subimos nada — por eso no hay cola, ni límite diario, ni duda sobre qué pasa después con tus archivos. También admitimos AVIF, generación de iconos y conversión a PDF."],
    ["¿Admitís HEIC de iPhone?", "Todavía no. Los navegadores de escritorio no decodifican HEIC, y añadir un decodificador ralentizaría la página para todos por servir a unos pocos. Configura tu iPhone en «Más compatible» y obtendrás JPG."],
    ["¿Funciona sin conexión?", "Una vez cargada la página, el procesamiento no necesita conexión porque ocurre en local."],
    ["¿Dónde se guardan mis estadísticas?", "Solo en el almacenamiento local de tu navegador; nunca salen de tu dispositivo. Puedes reiniciarlas desde el panel de uso."],
    ["¿Funciona en el móvil?", "Sí, en iPhone y Android directamente desde el navegador, sin instalar nada. Un lote muy grande puede ir más lento en un teléfono antiguo, porque el procesamiento usa su memoria."],
  ] as [string, string][],
};

export default es;
