// Helper pour obtenir les chemins des images
export const getImagePath = (folder: string, filename: string): string => {
  try {
    // Pour Vite, on utilise import.meta.url pour les assets dans src/
    return new URL(`../image/${folder}/${filename}`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image: ${folder}/${filename}`, error);
    return '';
  }
};

// Chemins des images pour chaque projet
export const projectImages = {
  ediba: [
    getImagePath('imageprojetEDIBA', "Capture d'écran 2025-10-27 083238.png"),
    getImagePath('imageprojetEDIBA', "Capture d'écran 2025-11-07 162358.png"),
  ],
  medical: [
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-28 105220.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-28 105237.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-28 105315.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-29 200027.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-29 213213.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-29 221926.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-29 222020.png"),
    getImagePath('imageAPPMedical', "Capture d'écran 2025-04-29 222349.png"),
  ],
  formulaire: [
    getImagePath('imageFormulaire', 'IMG-20251123-WA0010.jpg'),
    getImagePath('imageFormulaire', 'IMG-20251123-WA0011.jpg'),
    getImagePath('imageFormulaire', 'IMG-20251123-WA0012.jpg'),
    getImagePath('imageFormulaire', 'IMG-20251123-WA0013.jpg'),
    getImagePath('imageFormulaire', 'IMG-20251123-WA0014.jpg'),
  ],
  keyImmo: [
    getImagePath('imageKEY IMMO', "Capture d'écran 2025-07-15 080652.png"),
    getImagePath('imageKEY IMMO', "Capture d'écran 2025-07-15 080805.png"),
    getImagePath('imageKEY IMMO', "Capture d'écran 2025-07-15 080944.png"),
    getImagePath('imageKEY IMMO', "Capture d'écran 2025-07-23 114048.png"),
    getImagePath('imageKEY IMMO', "Capture d'écran 2025-08-05 154123.png"),
  ],
};

