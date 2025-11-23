import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
  title?: string;
}

const ImageGallery = ({ images, isOpen, onClose, initialIndex = 0, title }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    console.log('ImageGallery - isOpen changed:', isOpen, 'images:', images.length);
    if (isOpen) {
      setCurrentIndex(initialIndex);
      console.log('Setting initial index to:', initialIndex);
    }
  }, [isOpen, initialIndex, images.length]);

  // Défilement automatique
  useEffect(() => {
    if (!isOpen || !isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Navigation au clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  console.log('🖼️ ImageGallery render - isOpen:', isOpen, 'mounted:', mounted, 'images.length:', images.length);

  if (!isOpen || !mounted || images.length === 0) {
    return null;
  }

  const galleryContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={24} />
        </button>

        {/* Contenu de la galerie */}
        <div
          className="relative w-full h-full flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image principale */}
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {images[currentIndex] && (
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  onError={(e) => {
                    console.error('Error loading image:', images[currentIndex]);
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}
            </AnimatePresence>

            {/* Boutons navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 w-14 h-14 bg-slate-800/80 hover:bg-primary-800 rounded-full flex items-center justify-center transition-all duration-300 group z-40"
                >
                  <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={28} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 w-14 h-14 bg-slate-800/80 hover:bg-primary-800 rounded-full flex items-center justify-center transition-all duration-300 group z-40"
                >
                  <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={28} />
                </button>
              </>
            )}

            {/* Titre du projet */}
            {title && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </motion.div>
            )}

            {/* Indicateur d'image */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Miniatures en bas */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-4xl overflow-x-auto px-4 pb-2"
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'border-primary-800 scale-110 shadow-lg shadow-primary-800/50'
                      : 'border-slate-600 hover:border-slate-400 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </motion.div>
          )}

          {/* Contrôles de lecture automatique */}
          {images.length > 1 && (
            <div className="absolute top-20 right-4 flex flex-col gap-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-primary-800 text-white'
                    : 'bg-slate-800/80 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Lecture'}
              </button>
            </div>
          )}
        </div>
    </motion.div>
  );

  return mounted ? createPortal(galleryContent, document.body) : null;
};

export default ImageGallery;

