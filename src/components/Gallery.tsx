import { Play, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { portraitPhotos, presentationVideo } from '../utils/imagePaths';
import { site } from '../config/site';
import ImageGallery from './ImageGallery';
import { usePreferences } from '../context/PreferencesContext';

const Gallery = () => {
  const { t } = usePreferences();
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: [] as string[],
    initialIndex: 0,
    title: '',
  });

  const tiles = [
    { src: portraitPhotos.costume, label: t.gallery.costume },
    { src: portraitPhotos.desk, label: t.gallery.desk },
    { src: portraitPhotos.casual, label: t.gallery.casual },
    { src: portraitPhotos.leadership, label: t.gallery.leadership },
  ];

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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">{t.gallery.eyebrow}</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">{t.gallery.title}</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold-500 to-primary-500" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400">{t.gallery.subtitle}</p>
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
            aria-label={`${t.gallery.presentation} — ${site.name}`}
          >
            <source src={presentationVideo} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-gold-200 backdrop-blur">
            <Play size={12} />
            {t.gallery.presentation}
          </div>
        </motion.article>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <motion.button
              key={tile.label}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => openPhoto(tile.src, tile.label)}
              className="glass-card group relative overflow-hidden rounded-3xl text-left"
            >
              <img
                src={tile.src}
                alt={tile.label}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-200">
                  <Camera size={14} />
                  {tile.label}
                </span>
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
