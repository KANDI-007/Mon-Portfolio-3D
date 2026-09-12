import { ExternalLink, Calendar, Users, Image as ImageIcon, Filter, Scale, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { projectImages } from '../utils/imagePaths';
import ImageGallery from './ImageGallery';
import { liveLinks } from '../config/site';

type Project = {
  title: string;
  company: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  period: string;
  images: string[];
  categoryId: string;
  liveUrl?: string;
  featured?: boolean;
};

const PhoneFrame = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`relative overflow-hidden rounded-[1.8rem] border-[3px] border-gold-400/50 bg-slate-950 shadow-[0_20px_60px_rgba(212,175,55,0.18)] ${className}`}>
    <img src={src} alt={alt} className="block h-full w-full object-cover object-top" />
  </div>
);

const ProjectPlaceholder = ({ title, color }: { title: string; color: string }) => (
  <div className={`relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br ${color} opacity-80`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
          <ImageIcon className="text-white" size={32} />
        </div>
        <h3 className="px-4 text-lg font-bold text-white">{title}</h3>
      </div>
    </div>
  </div>
);

const ProjectCard = ({
  project,
  index,
  openGallery,
}: {
  project: Project;
  index: number;
  openGallery: (images: string[], initialIndex: number, title: string) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images]);

  const handleViewMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images?.length) {
      openGallery(project.images, currentImageIndex, project.title);
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card group overflow-hidden rounded-3xl"
    >
      <div className="relative h-72 w-full overflow-hidden bg-slate-950 md:h-80">
        {project.images?.[0] ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full object-contain object-top"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-semibold text-white`}>
              {project.category}
            </span>
            {project.images.length > 1 && (
              <button
                type="button"
                onClick={handleViewMore}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition group-hover:bg-slate-950/40 group-hover:opacity-100"
              >
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">Voir les images</span>
              </button>
            )}
          </>
        ) : (
          <ProjectPlaceholder title={project.title} color={project.color} />
        )}
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Users size={14} className="text-gold-400" /> {project.company}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} className="text-gold-400" /> {project.period}
            </span>
          </div>
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              Visiter le site
              <ExternalLink size={16} />
            </a>
          )}
          {project.images.length > 0 && (
            <button
              type="button"
              onClick={handleViewMore}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:border-gold-400/50"
            >
              Galerie
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const FeaturedJuris = ({
  openGallery,
}: {
  openGallery: (images: string[], initialIndex: number, title: string) => void;
}) => {
  const shots = projectImages.juris;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative mb-14 overflow-hidden rounded-[2rem] border border-gold-400/30 bg-gradient-to-br from-slate-950 via-[#0b1430] to-slate-950 p-6 shadow-[0_0_80px_rgba(212,175,55,0.12)] md:p-10"
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-primary-600/20 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            <Sparkles size={14} />
            À la une
          </div>
          <div className="mb-3 flex items-center gap-3 text-gold-300">
            <Scale size={22} />
            <span className="text-sm font-medium">ISSJ · UCAO-UUT</span>
          </div>
          <h3 className="font-display text-4xl leading-tight text-white sm:text-5xl">Juris Academy</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold-400">
            Unis par le droit, guidé par l’excellence
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Plateforme juridique complète pour les étudiants : cours et TD, annales, quiz, flashcards,
            club des juristes, workgroup et forum. Conçue de bout en bout, déjà en ligne.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['React', 'Mobile-first', 'Forum', 'Cours & annales'].map((tag) => (
              <span key={tag} className="rounded-full border border-gold-400/25 px-3 py-1 text-xs text-gold-100">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={liveLinks.juris}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-gold-500/25"
            >
              Ouvrir Juris Academy
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              onClick={() => openGallery(shots, 0, 'Juris Academy')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gold-400/40 px-6 py-3.5 text-sm font-semibold text-gold-200 hover:bg-gold-500/10"
            >
              Voir le chef-d’œuvre
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center gap-3 sm:gap-4">
          <button type="button" onClick={() => openGallery(shots, 0, 'Juris Academy')} className="hidden w-[28%] sm:block">
            <PhoneFrame src={shots[0]} alt="Splash Juris Academy" className="translate-y-6" />
          </button>
          <button type="button" onClick={() => openGallery(shots, 1, 'Juris Academy')} className="z-10 w-[42%] sm:w-[38%]">
            <PhoneFrame src={shots[1]} alt="Accueil Juris Academy" />
          </button>
          <button type="button" onClick={() => openGallery(shots, 3, 'Juris Academy')} className="w-[32%] sm:w-[28%]">
            <PhoneFrame src={shots[3]} alt="Cours Juris Academy" className="translate-y-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: [] as string[],
    initialIndex: 0,
    title: '',
  });

  const openGallery = (images: string[], initialIndex: number, title: string) => {
    setGalleryState({ isOpen: true, images, initialIndex, title });
  };

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const projects: Project[] = [
    {
      title: 'Motozil',
      company: 'EDIBA INTER',
      category: 'Localisation',
      description:
        'Application de localisation et de sécurité mobile : suivi GPS en temps réel, gestion d’appareils et agent iOS / Android.',
      technologies: ['React', 'GPS', 'Cartes', 'Sécurité'],
      color: 'from-sky-600 to-blue-800',
      period: '2026',
      images: projectImages.motozil,
      categoryId: 'mobile',
      liveUrl: liveLinks.motozil,
    },
    {
      title: 'MaCité+',
      company: 'UCAO-UUT',
      category: 'Résidences',
      description:
        'Gestion des résidences universitaires : présence, loyer, études, actualités et jeux. Application complète, déjà en production.',
      technologies: ['React', 'API REST', 'UI/UX'],
      color: 'from-primary-600 to-cyan-600',
      period: '2025 – 2026',
      images: projectImages.macite,
      categoryId: 'web',
      liveUrl: liveLinks.macite,
    },
    {
      title: 'Facturation EDIBA INTER',
      company: 'EDIBA INTER',
      category: 'Web + Mobile',
      description:
        'Application de gestion de facturation en production : tableau de bord temps réel, chiffre d’affaires, encaissements, clients et fournisseurs. Version web React et mobile Flutter.',
      technologies: ['React', 'API REST', 'Flutter', 'Dart'],
      color: 'from-gold-600 to-primary-700',
      period: '2025 – 2026',
      images: projectImages.ediba,
      categoryId: 'web',
      liveUrl: liveLinks.ediba,
    },
    {
      title: 'RadApp',
      company: 'UCAO-UUT',
      category: 'Full Stack',
      description:
        'Gestion de restaurant développée seul : backend Java Spring Boot et frontend Angular, base de données et documentation API.',
      technologies: ['Angular', 'Spring Boot', 'Java', 'SQL'],
      color: 'from-rose-600 to-orange-500',
      period: '11/2025 – 12/2025',
      images: [],
      categoryId: 'fullstack',
    },
    {
      title: 'Site AC Barracuda',
      company: 'AC Barracuda',
      category: 'Web',
      description:
        'Co-développement du site vitrine du club : actualités, calendrier, résultats et effectif.',
      technologies: ['Web', 'Intégration', 'UI'],
      color: 'from-emerald-600 to-teal-600',
      period: '2025 – 2026',
      images: [],
      categoryId: 'web',
    },
    {
      title: 'Réservation médicale',
      company: 'Projet étudiant',
      category: 'Mobile',
      description: 'Application Flutter de prise de rendez-vous médicaux, avec authentification et stockage sécurisé.',
      technologies: ['Flutter', 'Firebase', 'Auth'],
      color: 'from-purple-600 to-pink-600',
      period: '2024',
      images: projectImages.medical,
      categoryId: 'mobile',
    },
    {
      title: 'KEY IMMO',
      company: 'Projet immobilier',
      category: 'Mobile',
      description: 'Application de catalogue immobilier : recherche, visites et suivi des prospects.',
      technologies: ['Flutter', 'Firebase', 'Maps'],
      color: 'from-green-600 to-emerald-500',
      period: '2025',
      images: projectImages.keyImmo,
      categoryId: 'mobile',
    },
  ];

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.categoryId === selectedCategory);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Portfolio</p>
            <h2 className="font-display text-4xl text-white sm:text-5xl">Mes réalisations</h2>
          </div>
          <p className="max-w-md text-sm italic text-slate-400">
            Des applications réellement mises en production, pas seulement des maquettes.
          </p>
        </div>

        {(selectedCategory === 'all' || selectedCategory === 'web' || selectedCategory === 'mobile') && (
          <FeaturedJuris openGallery={openGallery} />
        )}

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <Filter size={18} className="text-gold-400" />
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950'
                  : 'border border-white/10 text-slate-300 hover:border-gold-400/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} openGallery={openGallery} />
          ))}
        </div>

        <ImageGallery
          images={galleryState.images}
          isOpen={galleryState.isOpen}
          onClose={() => setGalleryState((s) => ({ ...s, isOpen: false }))}
          initialIndex={galleryState.initialIndex}
          title={galleryState.title}
        />
      </div>
    </section>
  );
};

export default Projects;
