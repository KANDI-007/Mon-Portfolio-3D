import type { Lang } from './translations';
import { liveLinks } from '../config/site';
import { projectImages } from '../utils/imagePaths';

export function getExperiences(lang: Lang) {
  const fr = [
    {
      period: '2026',
      title: 'Développeur Full Stack',
      company: 'Juris Academy — ISSJ',
      location: 'Lomé, Togo',
      link: liveLinks.juris,
      linkLabel: 'issj.edibainter.com',
      description:
        'Conception et développement de Juris Academy, plateforme juridique complète pour les étudiants : cours, annales, quiz, flashcards, club et forum.',
      achievements: [
        'Application mobile-first en production',
        'Cours, TD, annales et quiz par filière',
        'Forum étudiant et workgroup',
      ],
    },
    {
      period: '2026',
      title: 'Développeur',
      company: 'Motozil — EDIBA INTER',
      location: 'Lomé, Togo',
      link: liveLinks.motozil,
      linkLabel: 'motozil.edibainter.com',
      description:
        'Application de localisation et de sécurité mobile : suivi GPS, gestion d’appareils et agent iOS / Android.',
      achievements: ['Suivi GPS en temps réel', 'Gestion multi-appareils', 'Mise en production'],
    },
    {
      period: '25/08/2025 – 10/03/2026',
      title: 'Développeur Web et Mobile',
      company: 'EDIBA INTER',
      location: 'Lomé, Togo',
      link: liveLinks.ediba,
      linkLabel: 'eip.edibainter.com',
      description:
        'Stage pratique : conception et déploiement d’une application web de facturation en React, consommée via API REST sécurisées, sous la direction de Mme Abidé Alayi. Solution aujourd’hui utilisée en production.',
      achievements: [
        'Application web de facturation en production',
        'Version mobile associée en Flutter / Dart',
        'Sélectionné et parrainé par l’ANPE (09/2025)',
        'Supports de communication visuelle et activités terrain',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Co-développeur',
      company: 'AC Barracuda',
      location: 'Lomé, Togo',
      description:
        'Co-développement du site vitrine du club : actualités, calendrier et résultats, effectif — intégration des contenus et mise en page des sections.',
      achievements: [
        'Site vitrine officiel du club',
        'Actualités, calendrier et résultats',
        'Présentation de l’effectif',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Développeur',
      company: 'UCAO-UUT — MaCité+',
      location: 'Lomé, Togo',
      link: liveLinks.macite,
      linkLabel: 'macite.edibainter.com',
      description:
        'Conception et développement en React de MaCité+, en autonomie totale, pour la gestion des résidences de la cité universitaire.',
      achievements: ['Interface utilisateur complète', 'Consommation d’API REST', 'Mise en production'],
    },
    {
      period: '11/2025 – 12/2025',
      title: 'Développeur Full Stack',
      company: 'UCAO-UUT — RadApp',
      location: 'Lomé, Togo',
      description:
        'Application de gestion de restaurant développée seul : backend Java Spring Boot (Gradle) et frontend Angular, avec documentation technique.',
      achievements: [
        'Modélisation et création de la base de données',
        'Endpoints REST documentés',
        'Connexion complète Angular ↔ API',
      ],
    },
  ];

  const en = [
    {
      period: '2026',
      title: 'Full Stack Developer',
      company: 'Juris Academy — ISSJ',
      location: 'Lomé, Togo',
      link: liveLinks.juris,
      linkLabel: 'issj.edibainter.com',
      description:
        'Designed and built Juris Academy, a complete legal platform for students: courses, past papers, quizzes, flashcards, club and forum.',
      achievements: [
        'Mobile-first app in production',
        'Courses, tutorials, past papers and quizzes by major',
        'Student forum and workgroup',
      ],
    },
    {
      period: '2026',
      title: 'Developer',
      company: 'Motozil — EDIBA INTER',
      location: 'Lomé, Togo',
      link: liveLinks.motozil,
      linkLabel: 'motozil.edibainter.com',
      description:
        'Mobile location and security app: GPS tracking, device management and iOS / Android agent.',
      achievements: ['Real-time GPS tracking', 'Multi-device management', 'Shipped to production'],
    },
    {
      period: '25/08/2025 – 10/03/2026',
      title: 'Web & Mobile Developer',
      company: 'EDIBA INTER',
      location: 'Lomé, Togo',
      link: liveLinks.ediba,
      linkLabel: 'eip.edibainter.com',
      description:
        'Internship: designed and deployed a React billing web app consuming secured REST APIs, under Mme Abidé Alayi. Now used in production.',
      achievements: [
        'Billing web app in production',
        'Companion mobile version in Flutter / Dart',
        'Selected and sponsored by ANPE (09/2025)',
        'Visual communication assets and field activities',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Co-developer',
      company: 'AC Barracuda',
      location: 'Lomé, Togo',
      description:
        'Co-developed the club showcase site: news, calendar and results, squad — content integration and section layout.',
      achievements: ['Official club showcase site', 'News, calendar and results', 'Squad presentation'],
    },
    {
      period: '2025 – 2026',
      title: 'Developer',
      company: 'UCAO-UUT — MaCité+',
      location: 'Lomé, Togo',
      link: liveLinks.macite,
      linkLabel: 'macite.edibainter.com',
      description:
        'Designed and developed MaCité+ in React, fully autonomously, for university residence management.',
      achievements: ['Complete user interface', 'REST API consumption', 'Shipped to production'],
    },
    {
      period: '11/2025 – 12/2025',
      title: 'Full Stack Developer',
      company: 'UCAO-UUT — RadApp',
      location: 'Lomé, Togo',
      description:
        'Restaurant management app built solo: Java Spring Boot (Gradle) backend and Angular frontend, with technical docs.',
      achievements: [
        'Database modeling and creation',
        'Documented REST endpoints',
        'Full Angular ↔ API connection',
      ],
    },
  ];

  return lang === 'en' ? en : fr;
}

export function getEducation(lang: Lang) {
  if (lang === 'en') {
    return [
      {
        degree: 'BSc in Computer Science — Software Engineering',
        status: 'Obtained',
        institution: 'UCAO-UUT',
        location: 'Lomé, Togo',
        period: '2023 – 2026',
        description:
          'Engineering Sciences domain, Computer Science major, Application Development specialty — 180 credits validated. Certificate issued August 14, 2026.',
        highlights: [
          'Application development',
          'REST APIs & databases',
          'Software architecture',
          'Autonomous full-stack projects',
        ],
      },
      {
        degree: 'Baccalaureate 2 — Scientific track',
        status: 'Obtained',
        institution: 'LPL Le Salut',
        location: 'Agoè-Atchanvé',
        period: '2022 – 2023',
        description: 'Complete scientific education, mathematics and physical sciences.',
        highlights: ['Mathematics', 'Physical sciences', 'Natural sciences', 'Computer science'],
      },
    ];
  }

  return [
    {
      degree: 'Licence en Informatique — Génie logiciel',
      status: 'Obtenue',
      institution: 'UCAO-UUT',
      location: 'Lomé, Togo',
      period: '2023 – 2026',
      description:
        'Domaine Sciences de l’Ingénieur, mention Informatique, spécialité Développement d’Applications — 180 crédits validés. Attestation délivrée le 14 août 2026.',
      highlights: [
        'Développement d’applications',
        'API REST & bases de données',
        'Architecture logicielle',
        'Projets full stack en autonomie',
      ],
    },
    {
      degree: 'Baccalauréat 2 — Série Scientifique',
      status: 'Obtenu',
      institution: 'LPL Le Salut',
      location: 'Agoè-Atchanvé',
      period: '2022 – 2023',
      description: 'Formation scientifique complète, mathématiques et sciences physiques.',
      highlights: ['Mathématiques', 'Sciences physiques', 'Sciences naturelles', 'Informatique'],
    },
  ];
}

export function getProjects(lang: Lang) {
  const common = {
    motozil: { images: projectImages.motozil, liveUrl: liveLinks.motozil, color: 'from-sky-600 to-blue-800', categoryId: 'mobile', period: '2026', technologies: ['React', 'GPS', 'Maps', 'Security'] },
    macite: { images: projectImages.macite, liveUrl: liveLinks.macite, color: 'from-primary-600 to-cyan-600', categoryId: 'web', period: '2025 – 2026', technologies: ['React', 'REST API', 'UI/UX'] },
    ediba: { images: projectImages.ediba, liveUrl: liveLinks.ediba, color: 'from-gold-600 to-primary-700', categoryId: 'web', period: '2025 – 2026', technologies: ['React', 'REST API', 'Flutter', 'Dart'] },
    radapp: { images: [] as string[], color: 'from-rose-600 to-orange-500', categoryId: 'fullstack', period: '11/2025 – 12/2025', technologies: ['Angular', 'Spring Boot', 'Java', 'SQL'] },
    barracuda: { images: [] as string[], color: 'from-emerald-600 to-teal-600', categoryId: 'web', period: '2025 – 2026', technologies: ['Web', 'Integration', 'UI'] },
    medical: { images: projectImages.medical, color: 'from-purple-600 to-pink-600', categoryId: 'mobile', period: '2024', technologies: ['Flutter', 'Firebase', 'Auth'] },
    keyImmo: { images: projectImages.keyImmo, color: 'from-green-600 to-emerald-500', categoryId: 'mobile', period: '2025', technologies: ['Flutter', 'Firebase', 'Maps'] },
  };

  if (lang === 'en') {
    return [
      { title: 'Motozil', company: 'EDIBA INTER', category: 'Location', description: 'Mobile location and security app: real-time GPS tracking, device management and iOS / Android agent.', ...common.motozil },
      { title: 'MaCité+', company: 'UCAO-UUT', category: 'Residences', description: 'University residence management: attendance, rent, studies, news and games. Complete app, already in production.', ...common.macite },
      { title: 'EDIBA INTER Billing', company: 'EDIBA INTER', category: 'Web + Mobile', description: 'Production billing management app: real-time dashboard, revenue, collections, clients and suppliers. React web and Flutter mobile.', ...common.ediba },
      { title: 'RadApp', company: 'UCAO-UUT', category: 'Full Stack', description: 'Restaurant management built solo: Java Spring Boot backend and Angular frontend, database and API docs.', ...common.radapp },
      { title: 'AC Barracuda site', company: 'AC Barracuda', category: 'Web', description: 'Co-developed the club showcase site: news, calendar, results and squad.', ...common.barracuda },
      { title: 'Medical booking', company: 'Student project', category: 'Mobile', description: 'Flutter app for medical appointments, with authentication and secure storage.', ...common.medical },
      { title: 'KEY IMMO', company: 'Real-estate project', category: 'Mobile', description: 'Real-estate catalog app: search, visits and prospect tracking.', ...common.keyImmo },
    ];
  }

  return [
    { title: 'Motozil', company: 'EDIBA INTER', category: 'Localisation', description: 'Application de localisation et de sécurité mobile : suivi GPS en temps réel, gestion d’appareils et agent iOS / Android.', ...common.motozil },
    { title: 'MaCité+', company: 'UCAO-UUT', category: 'Résidences', description: 'Gestion des résidences universitaires : présence, loyer, études, actualités et jeux. Application complète, déjà en production.', ...common.macite },
    { title: 'Facturation EDIBA INTER', company: 'EDIBA INTER', category: 'Web + Mobile', description: 'Application de gestion de facturation en production : tableau de bord temps réel, chiffre d’affaires, encaissements, clients et fournisseurs. Version web React et mobile Flutter.', ...common.ediba },
    { title: 'RadApp', company: 'UCAO-UUT', category: 'Full Stack', description: 'Gestion de restaurant développée seul : backend Java Spring Boot et frontend Angular, base de données et documentation API.', ...common.radapp },
    { title: 'Site AC Barracuda', company: 'AC Barracuda', category: 'Web', description: 'Co-développement du site vitrine du club : actualités, calendrier, résultats et effectif.', ...common.barracuda },
    { title: 'Réservation médicale', company: 'Projet étudiant', category: 'Mobile', description: 'Application Flutter de prise de rendez-vous médicaux, avec authentification et stockage sécurisé.', ...common.medical },
    { title: 'KEY IMMO', company: 'Projet immobilier', category: 'Mobile', description: 'Application de catalogue immobilier : recherche, visites et suivi des prospects.', ...common.keyImmo },
  ];
}
