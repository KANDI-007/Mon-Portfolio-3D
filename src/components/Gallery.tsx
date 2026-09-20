import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { portraitPhotos, presentationVideo } from '../utils/imagePaths';
import { site } from '../config/site';
import { usePreferences } from '../context/PreferencesContext';
import RoundCarousel from './ui/round-carousel';

type CarouselSize = {
  imageWidth: number;
  imageHeight: number;
  height: number;
  spacing: number;
  perspective: number;
  cornerRadius: number;
  tilt: number;
};

function getCarouselSize(width: number): CarouselSize {
  if (width < 480) {
    return {
      imageWidth: 132,
      imageHeight: 168,
      height: 260,
      spacing: 5,
      perspective: 1400,
      cornerRadius: 16,
      tilt: -5,
    };
  }
  if (width < 768) {
    return {
      imageWidth: 160,
      imageHeight: 200,
      height: 320,
      spacing: 4,
      perspective: 1800,
      cornerRadius: 18,
      tilt: -6,
    };
  }
  if (width < 1024) {
    return {
      imageWidth: 200,
      imageHeight: 250,
      height: 400,
      spacing: 3,
      perspective: 2400,
      cornerRadius: 20,
      tilt: -7,
    };
  }
  return {
    imageWidth: 240,
    imageHeight: 300,
    height: 460,
    spacing: 3,
    perspective: 3000,
    cornerRadius: 22,
    tilt: -7,
  };
}

const Gallery = () => {
  const { t, theme } = usePreferences();
  const [size, setSize] = useState<CarouselSize>(() =>
    typeof window !== 'undefined' ? getCarouselSize(window.innerWidth) : getCarouselSize(1024)
  );

  useEffect(() => {
    const update = () => setSize(getCarouselSize(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const carouselImages = useMemo(
    () => [
      { src: portraitPhotos.hero },
      { src: portraitPhotos.costume },
      { src: portraitPhotos.desk },
      { src: portraitPhotos.casual },
      { src: portraitPhotos.leadership },
      { src: portraitPhotos.costume },
      { src: portraitPhotos.desk },
      { src: portraitPhotos.hero },
    ],
    []
  );

  const carouselBg = theme === 'light' ? '#f3f0ea' : '#020617';

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
          className="glass-card relative mb-6 overflow-hidden rounded-3xl"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-3xl border border-gold-400/20"
          style={{ height: size.height }}
        >
          <RoundCarousel
            images={carouselImages}
            imageWidth={size.imageWidth}
            imageHeight={size.imageHeight}
            spacing={size.spacing}
            speed={5}
            direction="right"
            drag
            sensitivity={4}
            tilt={size.tilt}
            perspective={size.perspective}
            cornerRadius={size.cornerRadius}
            innerDim={3.5}
            background={carouselBg}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
