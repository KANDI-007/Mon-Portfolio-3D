import { Play, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { portraitPhotos, presentationVideo } from '../utils/imagePaths';
import { site } from '../config/site';
import ImageGallery from './ImageGallery';

const tiles = [
  { src: portraitPhotos.costume, label: 'Tenue professionnelle' },
  { src: portraitPhotos.desk, label: 'Au bureau' },
  { src: portraitPhotos.casual, label: 'Lifestyle' },
  { src: portraitPhotos.leadership, label: 'Leadership & équipe' },
];

const Gallery = () => {
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: [] as string[],
    initialIndex: 0,
    title: '',
  });

  const allPhotos = [
    portraitPhotos.hero,
    portraitPhotos.desk,
    portraitPhotos.costume,
    portraitPhotos.casual,
    portraitPhotos.leadership,
  ];

  const openPhoto = (src: string, title: string) => {
    const index = allPhotos.indexOf(src);
    setGalleryState({
      isOpen: true,
      images: allPhotos,
      initialIndex: index >= 0 ? index : 0,
      title,
    });
  };

  return (
    <section id="gallery" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">En images</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Galerie</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
            Le même univers que le reste du site : costume, travail, campus et leadership.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative mb-4 overflow-hidden rounded-3xl"
        >
          <video
            className="mx-auto h-auto max-h-[70vh] min-h-[220px] w-full bg-slate-950 object-contain sm:min-h-[360px] lg:min-h-[520px]"
            poster={portraitPhotos.desk}
            muted
            playsInline
            loop
            autoPlay
            controls
            preload="metadata"
            aria-label={`Vidéo de présentation de ${site.name}`}
          >
            <source src={presentationVideo} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-gold-200 backdrop-blur">
            <Play size={12} />
            Présentation
          </div>
        </motion.article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile, index) => (
            <motion.button
              key={tile.label}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              onClick={() => openPhoto(tile.src, tile.label)}
              className="glass-card group relative min-h-[220px] overflow-hidden rounded-3xl text-left"
            >
              <img
                src={tile.src}
                alt={tile.label}
                loading="lazy"
                className="h-full min-h-[220px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-white">
                  <Camera size={14} className="text-gold-400" />
                  {tile.label}
                </p>
              </div>
            </motion.button>
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

export default Gallery;
