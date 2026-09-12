import { ExternalLink, Calendar, Users, Image as ImageIcon, Filter, Github } from 'lucide-react';
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
  githubUrl?: string;
};

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
      <div className="relative h-56 w-full overflow-hidden bg-slate-800 md:h-64">
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
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:border-gold-400/50"
            >
              <Github size={16} />
              Code
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
      title: 'Facturation EDIBA INTER',
      company: 'EDIBA INTER',
      category: 'Web + Mobile',
      description:
        'Application de facturation conçue de bout en bout et aujourd’hui utilisée en production. Version web React et version mobile Flutter.',
      technologies: ['React', 'API REST', 'Flutter', 'Dart'],
      color: 'from-gold-600 to-primary-700',
      period: '2025 – 2026',
      images: projectImages.ediba,
      categoryId: 'web',
      liveUrl: liveLinks.ediba,
      githubUrl: liveLinks.edibaGithub,
    },
    {
      title: 'MaCité+',
      company: 'UCAO-UUT',
      category: 'Web',
      description:
        'Application React pour la gestion des résidences de la cité universitaire. Développée en autonomie, de l’interface à la mise en production.',
      technologies: ['React', 'API REST', 'UI/UX'],
      color: 'from-primary-600 to-cyan-600',
      period: '2025 – 2026',
      images: projectImages.formulaire,
      categoryId: 'web',
      liveUrl: liveLinks.macite,
      githubUrl: liveLinks.citeGithub,
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
    {
      title: 'Formulaire web UCAO',
      company: 'UCAO-UUT',
      category: 'Web',
      description: 'Collecte et traitement de données académiques, avec interface d’administration.',
      technologies: ['React', 'TypeScript', 'UI/UX'],
      color: 'from-blue-600 to-indigo-600',
      period: '2025',
      images: projectImages.formulaire,
      categoryId: 'web',
      githubUrl: liveLinks.formulaireGithub,
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
