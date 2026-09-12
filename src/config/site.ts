export const site = {
  name: 'Kandi Salman LARE',
  firstName: 'Kandi Salman',
  lastName: 'LARE',
  title: 'Développeur Full Stack',
  headline: 'Licence Informatique — Génie logiciel',
  tagline:
    'Diplômé en informatique (UCAO-UUT, 2026). Je conçois des applications web et mobiles de bout en bout — Juris Academy, MaCité+, Motozil, EDIBA INTER — déjà en production.',
  email: 'kandilare20@gmail.com',
  phone: '+228 91 67 61 67',
  phoneTel: '+22891676167',
  whatsapp: '22891676167',
  location: 'Lomé, Togo',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lom%C3%A9%2C+Togo',
  website: 'https://lare-kandi-s-portfolio.netlify.app',
  cvHref: '/cv/CV_LARE_KANDI_SALMAN_INFORMATIQUE.pdf',
  cvFileName: 'CV_LARE_KANDI_SALMAN_INFORMATIQUE.pdf',
  birthDate: '07/03/2006',
  license: 'Permis B',
  height: '1,78 m',
};

export const socialLinks = {
  github: 'https://github.com/KANDI-007',
  linkedin: 'https://www.linkedin.com/in/kandi-salman-lare',
  instagram: 'https://instagram.com/kandi.lare',
};

export const mailto = `mailto:${site.email}`;
export const telLink = `tel:${site.phoneTel}`;
export const whatsappLink = `https://wa.me/${site.whatsapp}`;

export const liveLinks = {
  ediba: 'https://eip.edibainter.com/',
  macite: 'https://macite.edibainter.com/',
  juris: 'https://issj.edibainter.com/',
  motozil: 'https://motozil.edibainter.com/',
  portfolio: site.website,
  edibaGithub: 'https://github.com/KANDI-007/ediba-inter',
  formulaireGithub: 'https://github.com/KANDI-007/formulaireUniversite',
  citeGithub: 'https://github.com/KANDI-007/formulaireCite',
};

export const orbitRoles = [
  'Full Stack',
  'React',
  'Spring Boot',
  'Flutter',
  'Angular',
  'UI / UX',
];

export const scrollToSection = (sectionId: string, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
