import { Code2, ExternalLink, Calendar, Users, Image as ImageIcon, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { projectImages } from '../utils/imagePaths';
import ImageGallery from './ImageGallery';

// Composant pour créer un placeholder magnifique
const ProjectPlaceholder = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br ${color} opacity-80`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-slate-900/30/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ImageIcon className="text-white" size={32} />
          </div>
          <h3 className="text-white font-bold text-lg px-4">{title}</h3>
        </div>
      </div>
      {/* Effet de brillance animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
    </div>
  );
};

const ProjectCard = ({ project, index, openGallery }: { project: typeof projects[0], index: number; openGallery: (images: string[], initialIndex: number, title: string) => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Défilement automatique des images dans la card
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
    if (project.images && project.images.length > 0) {
      openGallery(project.images, currentImageIndex, project.title);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 via-blue-900/20 to-slate-800/60 border border-primary-700/30 shadow-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-primary-500/50 backdrop-blur-sm"
    >
      {/* Image du projet - Grande et visible */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-700/50">
        {project.images && project.images.length > 0 && project.images[0] ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.parentElement?.querySelector('.image-placeholder');
                  if (placeholder) {
                    (placeholder as HTMLElement).style.display = 'block';
                  }
                }}
              />
            </AnimatePresence>
            <div className="image-placeholder hidden">
              <ProjectPlaceholder title={project.title} color={project.color} />
            </div>
            
            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Indicateurs d'images */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImageIndex ? 'bg-slate-900/30 w-6' : 'bg-slate-900/30/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Badge catégorie */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow-lg`}>
                {project.category}
              </span>
            </div>

            {/* Bouton voir plus au hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button
                onClick={handleViewMore}
                className="px-6 py-3 bg-slate-900/30 text-gray-100 rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-xl flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Voir les images
              </button>
            </div>
          </>
        ) : (
          <ProjectPlaceholder title={project.title} color={project.color} />
        )}
      </div>

      {/* Contenu de la card */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-primary-300 transition-colors duration-300 drop-shadow-lg" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)' }}>
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-200" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)' }}>
            <div className="flex items-center gap-1">
              <Users size={16} className="text-primary-300" />
              <span>{project.company}</span>
            </div>
            <span className="text-gray-400">•</span>
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-primary-300" />
              <span>{project.period}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-200 leading-relaxed line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)' }}>{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-gray-300 border border-slate-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-gray-300 border border-slate-600">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Bouton action */}
        <button
          onClick={handleViewMore}
          className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:from-primary-500 hover:to-accent-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/70"
        >
          Voir le projet
          <ExternalLink size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryState, setGalleryState] = useState<{
    isOpen: boolean;
    images: string[];
    initialIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: '',
  });

  const openGallery = (images: string[], initialIndex: number, title: string) => {
    setGalleryState({
      isOpen: true,
      images,
      initialIndex,
      title,
    });
  };

  const closeGallery = () => {
    setGalleryState({
      isOpen: false,
      images: [],
      initialIndex: 0,
      title: '',
    });
  };

  const categories = [
    { id: 'all', label: 'Toutes les catégories' },
    { id: 'mobile', label: 'Développement Mobile' },
    { id: 'web', label: 'Développement Web' },
    { id: 'ai', label: 'Intelligence Artificielle' },
  ];

  const projects = [
    {
      title: 'Application de Gestion de Facturation',
      company: 'EDIBA INTER',
      category: 'Mobile',
      description: 'Application mobile complète pour la gestion automatisée de la facturation, développée avec Flutter et Dart. Solution opérationnelle déployée en production sous la direction de Mme Abide Alayi.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
      features: [
        'Création et gestion des factures',
        'Suivi des paiements en temps réel',
        'Génération de rapports détaillés',
        'Interface intuitive et moderne',
      ],
      color: 'from-primary-800 to-accent-800',
      period: '2025',
      images: projectImages.ediba,
      categoryId: 'mobile',
    },
    {
      title: 'Application de Réservation Médicale',
      company: 'Projet Étudiant',
      category: 'Mobile',
      description: 'Application mobile de réservation de rendez-vous médicaux avec système de gestion complet et stockage sécurisé des données patients. Interface moderne et intuitive.',
      technologies: ['Flutter', 'Firebase', 'Cloud Firestore', 'Authentication'],
      features: [
        'Réservation de rendez-vous en ligne',
        'Gestion du calendrier médical',
        'Notifications push automatiques',
        'Stockage sécurisé des données',
      ],
      color: 'from-purple-500 to-pink-500',
      period: '2024',
      images: projectImages.medical,
      categoryId: 'mobile',
    },
    {
      title: 'Formulaire Web UCAO',
      company: 'UCAO-UUT',
      category: 'Web',
      description: 'Application web de gestion de formulaires pour l\'Université Catholique de l\'Afrique de l\'Ouest. Système complet de collecte et traitement de données académiques.',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'UI/UX'],
      features: [
        'Gestion des formulaires étudiants',
        'Traitement et validation des données',
        'Interface administrative complète',
        'Export des données en PDF/Excel',
      ],
      color: 'from-blue-500 to-cyan-500',
      period: '2025',
      images: projectImages.formulaire,
      categoryId: 'web',
    },
    {
      title: 'KEY IMMO - Plateforme Immobilière',
      company: 'Entreprise Immobilière',
      category: 'Mobile',
      description: 'Application mobile et web complète pour une entreprise immobilière. Gestion des biens, visites virtuelles, et suivi des clients avec interface moderne.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Maps API', 'UI/UX'],
      features: [
        'Catalogue de biens immobiliers',
        'Recherche avancée avec filtres',
        'Gestion des visites et rendez-vous',
        'Suivi des clients et prospects',
      ],
      color: 'from-green-500 to-emerald-500',
      period: '2025',
      images: projectImages.keyImmo,
      categoryId: 'mobile',
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.categoryId === selectedCategory);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/25 via-primary-950/25 to-transparent relative">
      <div className="max-w-7xl w-full mx-auto">
        {/* En-tête avec titre et citation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-2 drop-shadow-2xl" style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased' }}>
                <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent" style={{ 
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 4px 8px rgba(0, 0, 0, 0.9)',
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
                }}>
                  MES
                </span>
                <span className="text-gray-100" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}> PROJETS</span>
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-200 drop-shadow-lg" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)' }}>
                MES RÉALISATIONS RÉCENTES
              </h3>
            </div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-md italic"
            >
              "La qualité du travail est le facteur le plus important dans le succès d'un projet."
            </motion.p>
          </div>

          {/* Filtres de catégories */}
          <div className="flex flex-wrap gap-3 items-center">
            <Filter size={20} className="text-gray-300" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grille de projets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                openGallery={openGallery}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">Aucun projet dans cette catégorie.</p>
          </motion.div>
        )}

        {/* Galerie modale globale */}
        <ImageGallery
          images={galleryState.images}
          isOpen={galleryState.isOpen}
          onClose={closeGallery}
          initialIndex={galleryState.initialIndex}
          title={galleryState.title}
        />
      </div>
    </section>
  );
};

export default Projects;
