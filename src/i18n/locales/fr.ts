import type ar from "./ar";

const fr: typeof ar = {
  nav: {
    home: "Accueil",
    about: "À propos",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
    faq: "Questions fréquentes",
  },
  brand: { name: "LeanPix", tagline: "Compression d'images dans le navigateur" },
  hero: {
    title: "Compressez vos images sans les envoyer sur un serveur",
    subtitle:
      "Réduisez le poids de vos images jusqu'à 80 % sans différence visible : compression, conversion et redimensionnement du JPG, PNG, GIF, WebP et AVIF. Tout se passe dans votre navigateur, vos fichiers ne quittent donc jamais votre appareil et il n'y a aucun envoi à attendre.",
    cta: "Choisir des images",
    drop: "ou déposez-les ici",
    formats: "JPG · PNG · WebP · AVIF · GIF · jusqu'à 25 Mo par image",
  },
  dropzone: { active: "Déposez pour commencer", hint: "Jusqu'à {n} images à la fois" },
  settings: {
    title: "Réglages de compression",
    preset: "Niveau de compression",
    max: "Sans compression",
    auto: "Automatique (recommandé)",
    light: "Léger",
    medium: "Moyen",
    strong: "Fort",
    custom: "Qualité personnalisée",
    quality: "Qualité",
    format: "Format de sortie",
    original: "Identique à l'original",
    resize: "Dimension maximale (px)",
    noResize: "Inchangée",
    stripExif: "Supprimer les données EXIF",
    keepAlpha: "Conserver la transparence",
    apply: "Recompresser avec ces réglages",
    social: "Tailles courantes",
    target: "Poids de fichier visé",
    noTarget: "Sans objectif",
    targetHint:
      "Avec un objectif défini, la qualité s'ajuste automatiquement pour l'atteindre et prend le pas sur le niveau de compression choisi ci-dessus.",
  },
  social: {
    post: "Publication",
    story: "Story",
    cover: "Couverture",
    thumb: "Miniature",
    product: "Produit",
  },
  howto: { title: "Comment l'utiliser" },
  contact: {
    kind: "À quel sujet ?",
    kinds: ["Signaler un bug", "Suggestion", "Partenariat", "Question générale"],
    name: "Nom",
    message: "Message",
    send: "Envoyer",
    note: "Le bouton ouvre votre messagerie avec le message déjà rédigé : nous n'avons aucun serveur pour recevoir des formulaires et ne conservons aucune de vos données. Réponse habituelle sous 24 à 48 heures.",
  },
  pdf: {
    pick: "Choisissez les images à convertir en PDF",
    pickHint: "Vous pouvez en choisir plusieurs — chaque image devient une page",
    pageSize: "Format de page",
    a4: "A4",
    letter: "Letter",
    fit: "Ajuster à l'image",
    margin: "Marge (pt)",
    order: "Ordre des pages",
    orderHint: "Faites glisser pour réordonner — c'est l'ordre des pages dans le fichier",
    download: "Télécharger le PDF",
    building: "Création…",
    addMore: "Ajouter des images",
    failed: "Impossible de créer le fichier",
  },
  icon: {
    pick: "Choisissez une image à transformer en icône",
    pickHint: "Un PNG ou SVG carré sur fond transparent donne le meilleur résultat",
    fit: "Ajustement au carré",
    contain: "Image entière",
    cover: "Remplir et rogner",
    sizes: "Tailles à générer",
    downloadIco: "Télécharger favicon.ico",
    downloadPack: "Télécharger le pack complet",
  },
  job: {
    original: "Original",
    compressed: "Compressée",
    before: "Poids avant",
    after: "Poids après",
    saved: "Gain",
    dimensions: "Dimensions",
    quality: "Qualité appliquée",
    compare: "Comparer",
    download: "Télécharger",
    remove: "Retirer",
    copyImage: "Copier l'image",
    copied: "Copiée",
    copyFailed: "Copie impossible",
    share: "Partager",
    working: "Compression…",
    queued: "En attente",
    failed: "Cette image n'a pas pu être compressée",
    dragHandle: "Faites glisser pour comparer",
  },
  actions: {
    downloadAll: "Tout télécharger (ZIP)",
    downloadAllJpeg: "Tout télécharger en JPG",
    converting: "Conversion…",
    recompress: "Recompresser",
    clear: "Tout effacer",
    totalSaved: "Vous avez gagné {size} sur {total}",
  },
  errors: {
    size: "Le fichier dépasse la limite de 25 Mo",
    type: "Ce fichier n'est pas une image prise en charge",
    empty: "Le fichier est vide",
    limit: "Jusqu'à {n} images à la fois",
  },
  stats: {
    title: "Tableau de bord d'utilisation",
    images: "Images compressées",
    saved: "Espace gagné",
    processed: "Données traitées",
    ratio: "Gain moyen",
    reset: "Réinitialiser les statistiques",
    note: "Ces chiffres restent dans votre navigateur.",
  },
  features: {
    title: "Pourquoi LeanPix",
    privacy: {
      t: "Vos fichiers restent sur votre appareil",
      d: "Tout le traitement a lieu dans le navigateur via des Web Workers.",
    },
    speed: { t: "Résultat immédiat", d: "Aucun envoi, aucune file d'attente sur un serveur." },
    batch: { t: "Grands lots", d: "Compressez jusqu'à 30 images et téléchargez un seul ZIP." },
    convert: {
      t: "Convertir et redimensionner",
      d: "Entre JPG, PNG, WebP et AVIF, avec redimensionnement.",
    },
  },
  footer: {
    rights: "Tous droits réservés",
    made: "Fonctionne entièrement dans votre navigateur",
  },
  toolsNav: { title: "Outils", others: "Autres outils" },
  tools: {
    compress: {
      nav: "Compresser des images",
      short: "Compresser",
      h1: "Compressez vos images en ligne gratuitement, sans envoi",
      meta: "Compressez JPG, PNG, GIF, WebP et AVIF directement dans votre navigateur. Jusqu'à 80 % de poids en moins sans différence visible, sans rien envoyer sur un serveur et sans limite quotidienne.",
      intro:
        "Déposez vos images et la compression démarre immédiatement dans votre navigateur. Aucun envoi, aucune file d'attente, aucune limite quotidienne, et aucune image ne quitte votre appareil.",
      steps: [
        "Déposez vos images sur la page ou cliquez sur « Choisir des images » — jusqu'à 30 à la fois.",
        "Réglez le niveau de compression, ou indiquez un poids visé en Ko et nous l'atteindrons pour vous.",
        "Ouvrez « Comparer » pour juger la différence avec l'original avant de valider.",
        "Téléchargez une image, ou tout le lot dans un ZIP.",
      ],
      body: [
        {
          h: "Pourquoi le poids d'une image compte",
          p: "Les images représentent l'essentiel du poids d'une page. Une page lente, c'est un visiteur qui part avant même de voir votre produit, et un moins bon classement, car Google mesure la vitesse de chargement dans l'expérience de page. Passer une image de 4 Mo à 400 Ko divise son temps de chargement par dix environ, sans que personne ne remarque quoi que ce soit.",
        },
        {
          h: "Comment le niveau de qualité est choisi",
          p: "Le mode automatique examine le poids et le format de chaque image et choisit une qualité pour elle seule : les grandes photos absorbent une compression forte sans que cela se voie, les petites demandent plus de ménagement. Pour un contrôle total, choisissez « Qualité personnalisée », déplacez le curseur entre 1 et 100 et jugez le résultat vous-même.",
        },
        {
          h: "Compresser un fichier JPG",
          p: "Le JPG est le format photographique le plus répandu et celui qui répond le mieux à la compression. Une photo d'appareil de 5 Mo descend généralement sous 1 Mo sans différence perceptible, car son encodage écarte d'abord les détails que l'œil ne distingue pas. Déposez vos fichiers et laissez le mode automatique, ou fixez un poids visé en Ko si une plateforme vous impose une limite.",
        },
        {
          h: "Compresser des images GIF",
          p: "Le GIF est lourd parce qu'il stocke plusieurs images avec un encodage ancien. Nous le convertissons en image fixe — PNG s'il y a de la transparence, JPG sinon — et le poids chute nettement. S'il vous faut conserver l'animation, la bonne solution est une courte vidéo en MP4 ou WebM, pas un GIF compressé.",
        },
        {
          h: "Formats pris en charge et limites",
          p: "JPG, PNG, WebP, AVIF et GIF, jusqu'à 25 Mo par image et 30 images par lot. Vous pouvez conserver le format d'origine ou passer à un format plus récent pendant la compression.",
        },
      ],
      faq: [
        {
          q: "Mes images sont-elles envoyées sur un serveur ?",
          a: "Non. Tout se passe dans votre navigateur via des Web Workers, et pas un octet de vos images n'est envoyé à un serveur, ni le nôtre ni un autre.",
        },
        {
          q: "Combien vais-je gagner ?",
          a: "Cela dépend de l'image et du format. Les JPG photographiques gagnent généralement entre 60 et 85 %. Les PNG en aplats gagnent souvent davantage, surtout convertis en WebP.",
        },
        {
          q: "La qualité en souffre-t-elle ?",
          a: "La compression avec perte écarte des détails que votre œil ne distingue pas à une taille d'affichage normale. Utilisez « Comparer » pour en juger avant de télécharger, et montez la qualité si le résultat ne vous convient pas.",
        },
        {
          q: "Y a-t-il une limite quotidienne ?",
          a: "Non. Aucun compte, aucun abonnement, aucun compteur. Les seules limites sont 25 Mo par image et 30 images par lot, et ce sont des limites de mémoire du navigateur, pas du service.",
        },
        {
          q: "Comment compresser une image à un poids précis ?",
          a: "Choisissez une valeur sous « Poids de fichier visé » — 100, 200 ou 500 Ko — et nous essayons des niveaux de qualité successifs jusqu'à approcher au plus près sans dépasser votre objectif.",
        },
        {
          q: "Cela fonctionne-t-il sur mobile ?",
          a: "Oui, sur iPhone et Android directement depuis le navigateur, sans rien installer. Le traitement utilise la mémoire de l'appareil, un très gros lot peut donc être plus lent sur un téléphone ancien.",
        },
        {
          q: "Cela fonctionne-t-il hors ligne ?",
          a: "Une fois la page chargée, la compression n'a besoin d'aucune connexion puisque tout se passe en local.",
        },
        {
          q: "Faut-il un compte ?",
          a: "Non. Aucune inscription, aucun e-mail, aucune carte. Ouvrez la page et utilisez-la.",
        },
        {
          q: "Quel est le poids maximal par fichier ?",
          a: "25 Mo par image. Cette limite protège la mémoire du navigateur, elle ne restreint pas l'usage.",
        },
        {
          q: "Les données EXIF sont-elles supprimées à la compression ?",
          a: "Oui par défaut, car le réencodage les écarte. Vous pouvez désactiver l'option dans le panneau de réglages si vous souhaitez les conserver.",
        },
        {
          q: "En quoi êtes-vous différents des autres compresseurs ?",
          a: "La plupart envoient vos images sur leur serveur et vous les renvoient. Nous n'envoyons rien — d'où l'absence de file d'attente, de limite quotidienne, et de question sur ce qu'il advient ensuite de vos fichiers.",
        },
        {
          q: "Prenez-vous en charge l'AVIF ?",
          a: "Oui, en compression comme en conversion. Il gagne davantage que le WebP, mais son encodage est plus lent.",
        },
      ],
    },
    resize: {
      nav: "Redimensionner",
      short: "Dimensions",
      h1: "Redimensionnez vos images par lots",
      meta: "Réduisez vos images à 1920 px, 1280 px ou la taille de votre choix, proportions conservées, dans votre navigateur et sans aucun envoi.",
      intro:
        "Choisissez une dimension maximale et toutes les images y seront réduites en conservant leurs proportions. Le mode par défaut ici est « Sans compression » : uniquement le redimensionnement, sans toucher à la qualité. Les images déjà plus petites que la limite restent intactes.",
      steps: [
        "Déposez vos images sur la page — jusqu'à 30 par lot.",
        "Choisissez la dimension maximale, ou cliquez sur une taille prête comme « Publication » ou « Produit ».",
        "Vérifiez les dimensions obtenues sur la fiche de chaque image.",
        "Téléchargez une image ou tout le lot.",
      ],
      body: [
        {
          h: "Pourquoi redimensionner avant de compresser",
          p: "Le plus grand gaspillage sur un site est de servir une photo de 6000 px de large dans un emplacement de 800 px. Le navigateur la télécharge entièrement puis la réduit pour l'afficher : vous payez donc tous les pixels superflus. Réduire les dimensions rapporte bien plus que d'augmenter la compression.",
        },
        {
          h: "Quelle taille choisir",
          p: "1920 px suffit pour une image pleine largeur, 1280 px convient aux illustrations d'articles et 800 px suffit largement aux vignettes produit dans une grille. Pour les écrans à haute densité, doublez votre cible une seule fois.",
        },
        {
          h: "Les proportions sont toujours conservées",
          p: "La limite s'applique au côté le plus long et l'autre s'en déduit, rien n'est donc déformé et vous n'avez aucune dimension à calculer image par image.",
        },
      ],
      faq: [
        {
          q: "L'image est-elle rognée ?",
          a: "Non. L'image entière est réduite en conservant ses proportions et rien n'est coupé.",
        },
        {
          q: "Les petites images sont-elles agrandies ?",
          a: "Non. Une image déjà plus petite que la limite conserve ses dimensions d'origine. Agrandir coûte de la netteté et n'invente aucun détail.",
        },
        {
          q: "Puis-je redimensionner sans compresser ?",
          a: "Oui, et c'est le réglage par défaut de cette page : le niveau « Sans compression ». Les PNG sont réencodés sans perte et ne perdent absolument rien ; les JPG sont encodés à la qualité maximale, puisque changer le nombre de pixels impose un réencodage.",
        },
        {
          q: "Quelle est la taille des images Instagram ?",
          a: "Une publication carrée fait 1080 px et une story 1080 × 1920. Cliquez sur « Publication » ou « Story » dans les réglages et la limite est définie pour vous.",
        },
        {
          q: "Quelle taille pour des photos de produit ?",
          a: "1200 px couvre la plupart des boutiques et laisse de la marge pour le zoom. Le bouton « Produit » la définit directement.",
        },
        {
          q: "Comment redimensionner beaucoup d'images à la même taille ?",
          a: "Déposez-les toutes en une fois et choisissez la dimension maximale une seule fois : elle s'applique à tout le lot.",
        },
        {
          q: "L'image sera-t-elle déformée ?",
          a: "Non. La limite s'applique au côté le plus long et l'autre découle des proportions, rien n'est donc étiré ni écrasé.",
        },
      ],
    },
    convert: {
      nav: "Convertir le format",
      short: "Convertir",
      h1: "Convertissez vos images en WebP, AVIF, JPG et PNG",
      meta: "Convertissez entre WebP, AVIF, JPG et PNG dans votre navigateur, par lots, sans rien envoyer sur un serveur.",
      intro:
        "Choisissez le format de sortie et toutes les images seront converties et compressées dans la même passe. Le format par défaut ici est le WebP, le meilleur choix général pour le web aujourd'hui.",
      steps: [
        "Déposez vos images dans n'importe quel format pris en charge.",
        "Choisissez le format de sortie — le WebP est déjà sélectionné.",
        "Ajustez la qualité si nécessaire, ou fixez un poids visé en Ko.",
        "Téléchargez les résultats un par un ou tous ensemble.",
      ],
      body: [
        {
          h: "WebP ou AVIF ?",
          p: "Le WebP pèse 25 à 35 % de moins que le JPG à qualité égale et il est pris en charge par tous les navigateurs en usage, ce qui en fait le choix sûr. L'AVIF descend nettement plus bas, mais il encode plus lentement et reste plus récent. Pour une boutique ou un site généraliste, commencez par le WebP.",
        },
        {
          h: "Quand rester en JPG ou en PNG",
          p: "Restez en JPG si vous devez déposer les images sur une plateforme qui n'accepte rien d'autre. Restez en PNG si une image a besoin d'une vraie transparence et que vous préférez ne pas passer au WebP — même si le WebP gère aussi la transparence, pour un poids moindre.",
        },
        {
          h: "La transparence selon les formats",
          p: "Le JPG ne gère aucune transparence : en convertissant vers ce format, nous remplissons donc les zones transparentes en blanc plutôt que de les laisser virer au noir. Le WebP, l'AVIF et le PNG la conservent telle quelle.",
        },
      ],
      faq: [
        {
          q: "Mon navigateur prend-il en charge le WebP ?",
          a: "Oui. Tous les navigateurs en usage prennent en charge le WebP : Chrome, Firefox, Safari et Edge.",
        },
        {
          q: "Que deviennent les GIF ?",
          a: "Ils deviennent une image fixe, car un GIF animé ne peut pas être encodé via canvas. Nous choisissons le PNG pour conserver la transparence, ou le JPG si vous l'avez désactivée.",
        },
        {
          q: "Peut-on convertir sans perte de qualité ?",
          a: "La conversion en PNG est sans perte. Le WebP, l'AVIF et le JPG sont avec perte par défaut : montez la qualité à 95 ou plus pour rester au plus près de l'original.",
        },
        {
          q: "Comment convertir un JPG en WebP ?",
          a: "Déposez vos JPG et choisissez WebP comme format de sortie ; il est déjà sélectionné sur cette page, vous n'avez donc en général rien à changer.",
        },
        {
          q: "Comment convertir un PNG en JPG ?",
          a: "Choisissez JPEG comme format de sortie. Notez que la transparence sera remplie en blanc, le JPG ne pouvant pas la stocker.",
        },
        {
          q: "Comment convertir un WebP en JPG ?",
          a: "Déposez vos fichiers WebP et choisissez JPEG. Utile pour déposer sur une plateforme ancienne qui refuse le WebP.",
        },
        {
          q: "Lequel pèse le moins, WebP ou AVIF ?",
          a: "L'AVIF pèse en général nettement moins à qualité égale, mais il encode sensiblement plus lentement sur un gros lot.",
        },
        {
          q: "Puis-je convertir des formats mélangés en une fois ?",
          a: "Oui. Déposez des JPG, PNG et WebP ensemble et choisissez un seul format de sortie : tout y est unifié.",
        },
      ],
    },
    pdf: {
      nav: "Images en PDF",
      short: "PDF",
      h1: "Convertissez vos images en PDF gratuitement",
      meta: "Réunissez une ou plusieurs images dans un seul PDF depuis votre navigateur : votre ordre, votre format de page, et rien envoyé sur un serveur.",
      intro:
        "Choisissez vos images, rangez-les comme vous le souhaitez, et nous les réunissons dans un seul PDF. Chaque image devient une page, et la conversion se fait dans votre navigateur : rien ne quitte votre appareil.",
      steps: [
        "Choisissez les images à convertir — jusqu'à 30 à la fois.",
        "Faites-les glisser pour obtenir l'ordre voulu.",
        "Définissez le format de page et la marge.",
        "Cliquez sur « Télécharger le PDF ».",
      ],
      body: [
        {
          h: "Pourquoi convertir des images en PDF ?",
          p: "Un fichier unique s'envoie, s'imprime et s'archive plus facilement que dix images éparses. Administrations, banques et systèmes de candidature demandent généralement un PDF, car il conserve l'ordre et la mise en forme et s'ouvre à l'identique sur n'importe quel appareil — contrairement à un dossier d'images qui peut être réordonné ou arriver incomplet.",
        },
        {
          h: "A4 ou ajuster à l'image ?",
          p: "Choisissez A4 ou Letter si vous comptez imprimer ou déposer le fichier dans un système qui attend un format standard ; l'image est centrée sur la page avec une marge que vous maîtrisez. Choisissez « Ajuster à l'image » si le fichier n'est destiné qu'à l'écran : chaque page fera alors exactement la taille de son image, sans bandes blanches.",
        },
        {
          h: "L'ordre vous appartient",
          p: "Faites glisser les images pour les réordonner avant la conversion. Ce que vous voyez à l'écran est l'ordre des pages dans le fichier, et vous pouvez retirer une image ou en ajouter avant de télécharger.",
        },
      ],
      faq: [
        {
          q: "Comment convertir une image en PDF ?",
          a: "Choisissez l'image dans l'outil ci-dessus, sélectionnez un format de page, puis cliquez sur « Télécharger le PDF ». Sans inscription, sans attente et sans filigrane.",
        },
        {
          q: "Puis-je réunir plusieurs images dans un seul fichier ?",
          a: "Oui, et c'est le comportement par défaut. Sélectionnez-les toutes et chacune deviendra une page du même fichier, dans l'ordre que vous définissez en les faisant glisser.",
        },
        {
          q: "Mes images sont-elles envoyées sur un serveur ?",
          a: "Non. Le fichier est construit entièrement dans votre navigateur et pas un octet de vos images n'est envoyé où que ce soit.",
        },
        {
          q: "Quels formats sont acceptés ?",
          a: "JPG, PNG, WebP et GIF — toute image que votre navigateur sait ouvrir. Les PNG conservent leur transparence dans le fichier.",
        },
        {
          q: "Puis-je convertir mes images en PDF au format A4 ?",
          a: "Oui, choisissez A4 dans « Format de page ». Chaque image est centrée sur une page A4 avec la marge que vous réglez, et la page pivote automatiquement si l'image est en paysage.",
        },
        {
          q: "Combien d'images puis-je convertir ?",
          a: "Jusqu'à 30 par fichier. Cette limite protège la mémoire du navigateur, elle ne restreint pas l'usage.",
        },
        {
          q: "Le fichier sera-t-il très lourd ?",
          a: "La compression du PDF est activée par défaut. Pour un fichier beaucoup plus léger, compressez d'abord vos images avec l'outil de compression, puis convertissez-les ici.",
        },
        {
          q: "Puis-je ordonner les pages ?",
          a: "Oui, faites glisser n'importe quelle image à sa nouvelle place avant la conversion. Le numéro affiché sur chaque image indique sa page.",
        },
      ],
    },
    icon: {
      nav: "Image en icône",
      short: "Icône",
      h1: "Convertissez vos images en icônes et favicons",
      meta: "Transformez n'importe quelle image en favicon.ico multi-tailles et en icônes PNG prêtes pour votre site et votre application — dans votre navigateur et sans aucun envoi.",
      intro:
        "Choisissez une image et nous en générons un jeu d'icônes complet : un favicon.ico contenant six tailles, ainsi que des icônes PNG pour chaque dimension réclamée par les navigateurs et les systèmes d'exploitation.",
      steps: [
        "Choisissez une image — de préférence un PNG carré sur fond transparent.",
        "Sélectionnez le mode d'ajustement et les tailles voulues.",
        "Vérifiez chaque taille avant de télécharger.",
        "Téléchargez le favicon.ico seul, ou le pack complet avec les icônes PNG et le manifeste.",
      ],
      body: [
        {
          h: "Pourquoi une seule image ne suffit pas",
          p: "Les navigateurs réclament 16 et 32 pixels pour l'onglet, iOS réclame 180 pour l'écran d'accueil, et Android réclame 192 et 512 pour le manifeste. Fournir une seule grande image laisse chaque appareil la réduire lui-même, ce qui donne un rendu brouillon aux petites tailles ; nous générons donc chaque dimension séparément avec un lissage de haute qualité.",
        },
        {
          h: "Ce qu'est un fichier ICO",
          p: "Un fichier unique contenant plusieurs images à des tailles différentes, parmi lesquelles le système choisit celle qui convient à chaque emplacement. Nous y plaçons 16, 32, 48, 64, 128 et 256 pixels, la couverture dont ont besoin les navigateurs et Windows réunis.",
        },
        {
          h: "Image entière ou remplir et rogner ?",
          p: "Les icônes sont carrées et votre image ne l'est généralement pas. « Image entière » la conserve intégralement en ajoutant des marges transparentes, ce qui convient aux logos. « Remplir et rogner » occupe tout le carré en coupant les bords, ce qui convient aux photographies.",
        },
      ],
      faq: [
        {
          q: "Quelle différence entre favicon.ico et les icônes PNG ?",
          a: "L'ICO réunit plusieurs tailles et tous les navigateurs le comprennent, même les anciens. Les PNG séparés sont ce qu'exigent iOS, Android et le manifeste web. Le pack complet vous donne les deux.",
        },
        {
          q: "Où placer les fichiers ?",
          a: "À la racine de votre site, puis ajoutez les balises affichées sous l'outil dans le head de vos pages.",
        },
        {
          q: "Quelle image de départ choisir ?",
          a: "Une image carrée sur fond transparent, de 512 pixels ou plus. Un logo simple se lit bien mieux à 16 pixels qu'un dessin chargé de détails.",
        },
        {
          q: "La transparence est-elle conservée ?",
          a: "Oui. Toutes les tailles sont générées en PNG, dans l'ICO comme en dehors, et le PNG gère parfaitement la transparence.",
        },
        {
          q: "Le SVG est-il pris en charge ?",
          a: "Oui, et c'est la meilleure source possible : il est dessiné à la taille exacte de chaque icône, le résultat est donc parfaitement net.",
        },
        {
          q: "Quelle est la taille de l'icône iOS ?",
          a: "180 pixels, pour la balise apple-touch-icon. Elle est cochée par défaut dans la liste des tailles.",
        },
        {
          q: "Mon image est-elle envoyée sur un serveur ?",
          a: "Non. Tout est généré dans votre navigateur, et le fichier ICO lui-même est assemblé octet par octet sur la page.",
        },
        {
          q: "Qu'est-ce que site.webmanifest ?",
          a: "Un fichier qui indique à Android quelles icônes utiliser lorsqu'on ajoute votre site à l'écran d'accueil. Nous le générons prêt à l'emploi dans le pack.",
        },
      ],
    },
    exif: {
      nav: "Supprimer les données EXIF",
      short: "EXIF",
      h1: "Supprimez les données EXIF de vos images",
      meta: "Effacez les métadonnées d'appareil photo et la position GPS de vos photos avant de les publier — dans votre navigateur et sans aucun envoi.",
      intro:
        "Chaque photo prise avec votre téléphone porte des données invisibles : le modèle de l'appareil, le moment de la prise de vue et, le plus souvent, les coordonnées exactes de l'endroit où vous étiez. Cet outil les supprime.",
      steps: [
        "Déposez sur la page les photos que vous vous apprêtez à publier.",
        "Vérifiez que « Supprimer les données EXIF » est actif — c'est le cas par défaut ici.",
        "Choisissez le niveau « Sans compression » pour un changement de qualité minimal.",
        "Téléchargez les images nettoyées et publiez-les l'esprit tranquille.",
      ],
      body: [
        {
          h: "Ce que révèlent vos photos",
          p: "Les données EXIF peuvent contenir une latitude et une longitude précises à quelques mètres, l'heure de prise de vue à la seconde, et parfois le modèle et le numéro de série du téléphone. Publier une photo prise chez vous sur un site ou une place de marché peut diffuser votre adresse sans que vous le réalisiez.",
        },
        {
          h: "Comment elles sont supprimées",
          p: "L'image est redessinée sur un nouveau canevas puis réencodée depuis zéro. Le résultat ne conserve que les pixels et rien d'hérité — une méthode plus fiable que de tenter de vider les champs de métadonnées un à un.",
        },
        {
          h: "L'orientation est préservée",
          p: "Certains outils laissent les photos couchées, parce que la rotation vivait dans les métadonnées qu'ils ont effacées. Nous appliquons la rotation EXIF aux pixels avant d'écarter les données : l'image reste telle que vous la voyez.",
        },
      ],
      faq: [
        {
          q: "La suppression est-elle définitive ?",
          a: "Oui. Le fichier obtenu est réencodé et ne conserve aucune métadonnée de l'original. Votre fichier d'origine sur le disque reste intact.",
        },
        {
          q: "Cela affecte-t-il la qualité de l'image ?",
          a: "C'est le réencodage qui rend la suppression fiable. Choisissez le niveau « Sans compression » pour garder une qualité pratiquement identique à l'original.",
        },
        {
          q: "La position GPS est-elle supprimée ?",
          a: "Oui. Les coordonnées GPS font partie des données EXIF et sont supprimées avec le reste.",
        },
        {
          q: "Comment savoir si ma photo contient des données EXIF ?",
          a: "Presque tout ce qui est pris avec un téléphone ou un appareil photo en contient. Les captures d'écran et les visuels créés graphiquement, généralement pas.",
        },
        {
          q: "Les plateformes les effacent-elles automatiquement ?",
          a: "Certaines le font à la publication, d'autres non, en particulier lorsqu'un fichier est envoyé en original par messagerie ou par e-mail. Ne comptez pas dessus.",
        },
        {
          q: "Ma photo va-t-elle se retrouver de travers ?",
          a: "Non. Nous appliquons la rotation EXIF aux pixels avant d'écarter les données, un défaut courant chez d'autres outils.",
        },
        {
          q: "Puis-je nettoyer plusieurs photos à la fois ?",
          a: "Oui, jusqu'à 30 images par lot.",
        },
        {
          q: "Conservez-vous une copie de mes photos ?",
          a: "Non. Vos photos ne nous parviennent jamais : tout se passe dans votre navigateur.",
        },
      ],
    },
  },
};

export const pages = {
  about: {
    title: "À propos",
    body: [
      { p: "LeanPix compresse vos images entièrement dans votre navigateur. Vos fichiers ne sont jamais envoyés, stockés ni vus par nous." },
      { h: "Pourquoi dans le navigateur ?", p: "Envoyer des images signifie attendre, subir des limites de taille et faire confiance à un tiers. Les navigateurs modernes encodent le JPEG, le WebP et l'AVIF en local avec une excellente qualité, nous faisons donc ce travail via des Web Workers pour garder l'interface réactive même sur de gros lots." },
      { h: "Comment la qualité est choisie", p: "Le mode automatique équilibre poids et qualité selon le format et la taille du fichier. Les grandes photos supportent une compression plus forte sans perte visible ; les petites sont traitées avec plus de précaution. Réglez la qualité manuellement de 1 à 100 pour un contrôle total." },
      { h: "Pourquoi nous avons créé LeanPix", p: "La plupart des compresseurs d'images vous demandent une chose avant de vous aider : envoyer vos fichiers sur leur serveur. Cela paraît anodin et ne l'est pas — photos de produit avant un lancement, documents personnels, photos de famille portant les coordonnées de l'endroit où elles ont été prises. Tout cela part vers une machine que vous ne contrôlez pas, pour une durée que personne ne précise." },
      { p: "Nous avons créé LeanPix avec l'idée que cette demande n'est plus nécessaire. Le navigateur devant vous peut faire tout le travail, vos images n'ont donc aucune raison de quitter votre appareil pour être compressées." },
      { h: "Nos engagements", p: "Nous ne recevons pas vos images. Ce n'est pas une promesse mais une architecture — aucun serveur de notre côté ne les accepte. Déconnectez-vous après le chargement de la page et continuez à travailler." },
      { p: "Aucun compte, aucune limite quotidienne. Pas d'inscription, pas d'e-mail, pas de carte, et aucun compteur qui vous arrête à la dixième image. Les seules limites sont 25 Mo par image et 30 par lot, et elles appartiennent à la mémoire de votre navigateur, pas à notre service." },
      { p: "Aucun filigrane. Ce qui arrive sur votre appareil, c'est votre image, pas votre image signée par nous." },
      { h: "Pour qui", p: "Pour les commerçants qui préparent des dizaines de photos de produit avant de les mettre en ligne, pour les responsables de site pénalisés par leurs images dans les scores de vitesse, pour les développeurs qui ont besoin de WebP, d'AVIF ou d'un pack d'icônes en une minute, et pour quiconque veut retirer la localisation d'une photo avant de la publier." },
    ],
    links: [
      ["compress", "Compresser"],
      ["resize", "Redimensionner"],
      ["convert", "Convertir"],
      ["pdf", "Images en PDF"],
      ["icon", "Générateur d'icônes"],
      ["exif", "Supprimer EXIF"],
    ],
    startHere: "Commencer ici",
  },
  privacy: {
    title: "Confidentialité",
    sections: [
      { h: "Vos images", p: "Les images sont traitées localement dans votre navigateur et jamais envoyées à nos serveurs. Elles quittent la mémoire dès que vous fermez l'onglet ou cliquez sur « Tout effacer »." },
      { h: "Ce que nous conservons", p: "Vos réglages de compression et vos compteurs d'utilisation sont conservés dans le stockage local de votre navigateur. Ils ne quittent jamais votre appareil et vous pouvez les réinitialiser depuis le tableau de bord." },
      { h: "Publicité", p: "Nous affichons des publicités via Google AdSense pour couvrir le coût de fonctionnement du site. Google et ses partenaires utilisent des cookies pour diffuser des publicités basées sur vos visites précédentes sur ce site ou d'autres, et peuvent collecter des données telles que l'adresse IP, le type d'appareil et le navigateur." },
      { p: "Rien de tout cela n'atteint vos images — elles sont traitées dans votre navigateur et ne sont jamais envoyées à qui que ce soit, Google compris." },
      { p: "Vous pouvez désactiver la publicité personnalisée dans les paramètres publicitaires de Google, ou lire comment Google utilise les données sur les sites partenaires." },
      { h: "Autres cookies", p: "Nous ne posons aucun cookie de suivi propre et n'utilisons aucun outil d'analyse tiers. Ce que nous conservons se limite au stockage local décrit ci-dessus." },
      { h: "Données EXIF", p: "Lorsque « Supprimer les données EXIF » est activé — le réglage par défaut — les métadonnées d'appareil et de localisation sont retirées du fichier obtenu." },
    ],
  },
  terms: {
    title: "Conditions",
    sections: [
      { h: "Un service gratuit", p: "LeanPix est gratuit, sans inscription et sans limite d'usage au-delà des limites techniques ci-dessous." },
      { h: "Limites", p: "25 Mo par image et 30 images par lot. Ce sont des limites de mémoire du navigateur, pas du service." },
      { h: "Votre contenu", p: "Vous êtes responsable des images que vous traitez. Nous n'y avons pas accès et ne le pouvons pas, nous ne pouvons donc ni les examiner ni les modérer." },
      { h: "Aucune garantie", p: "Le service est fourni tel quel. Nous ne garantissons ni disponibilité continue ni résultats de compression précis." },
      { h: "Modifications", p: "Nous pouvons mettre à jour ces conditions au fil de l'évolution du service ; la date de la dernière révision apparaîtra ici." },
    ],
  },
  contact: {
    intro: "Signalez un bug, demandez un format ou suggérez une amélioration — nous lisons tout.",
  },
  faq: [
    ["Mes images sont-elles envoyées quelque part ?", "Non. La compression s'effectue dans votre navigateur via des Web Workers ; les fichiers ne quittent jamais votre appareil."],
    ["Combien puis-je gagner ?", "Généralement entre 40 et 80 %, selon le format et le contenu. Les photographies se compressent bien mieux que les graphiques en aplats."],
    ["La qualité en souffre-t-elle ?", "Le mode automatique vise une qualité où la différence ne se voit pas. Utilisez le comparateur pour en juger avant de télécharger."],
    ["Qu'en est-il des GIF animés ?", "Nous traitons la première image des GIF statiques et la convertissons en PNG ou JPEG. L'animation n'est pas encore prise en charge."],
    ["La transparence est-elle conservée ?", "Oui pour le PNG, le WebP et l'AVIF. Le JPEG n'a pas de canal alpha, le fond est donc rempli en blanc."],
    ["Quelles sont les limites ?", "25 Mo par image et 30 images par lot, pour protéger la mémoire du navigateur."],
    ["Faut-il un compte ?", "Non. Pas d'inscription, pas d'e-mail, pas de carte. Ouvrez la page et utilisez n'importe quel outil. Nous ne conservons rien vous concernant, car nous ne recevons rien du tout."],
    ["Est-ce entièrement gratuit ?", "Oui, sans filigrane et sans limite quotidienne. Le traitement se déroule sur votre propre appareil, cela ne nous coûte donc aucun serveur à facturer. Les publicités couvrent les frais de fonctionnement."],
    ["Comment régler une qualité personnalisée ?", "Dans le panneau de réglages, choisissez « Qualité personnalisée » et déplacez le curseur entre 1 et 100. Ou choisissez « Sans compression » pour changer les dimensions ou le format sans toucher à la qualité."],
    ["En quoi différez-vous de TinyPNG ou iLoveIMG ?", "Ces outils envoient vos images sur leur serveur puis vous les renvoient. Nous n'envoyons rien — d'où l'absence de file d'attente, de limite quotidienne, et de question sur ce qu'il advient ensuite de vos fichiers. Nous prenons aussi en charge l'AVIF, la génération d'icônes et la conversion PDF."],
    ["Prenez-vous en charge le HEIC de l'iPhone ?", "Pas encore. Les navigateurs de bureau ne décodent pas le HEIC, et intégrer un décodeur ralentirait la page pour tout le monde au profit de quelques-uns. Réglez votre iPhone sur « Le plus compatible » et vous obtiendrez du JPG."],
    ["Cela fonctionne-t-il hors ligne ?", "Une fois la page chargée, le traitement ne nécessite aucune connexion puisque tout se passe en local."],
    ["Où sont stockées mes statistiques ?", "Uniquement dans le stockage local de votre navigateur ; elles ne quittent jamais votre appareil. Réinitialisez-les depuis le tableau de bord d'utilisation quand vous le souhaitez."],
    ["Cela fonctionne-t-il sur mobile ?", "Oui, sur iPhone et Android directement depuis le navigateur, sans rien installer. Un très gros lot peut être plus lent sur un téléphone ancien, car le traitement utilise la mémoire de l'appareil."],
  ] as [string, string][],
};

export default fr;
