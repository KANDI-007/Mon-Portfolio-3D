import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const logo = new URL('../image/imagelogo/logo.png', import.meta.url).href;

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'bird' | 'logo' | 'flash' | 'complete'>('bird');
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    // Séquence d'animation
    const timeline = setTimeout(() => {
      setStage('logo');
    }, 700);

    const logoTimeout = setTimeout(() => {
      setStage('flash');
      setShowFlash(true);
    }, 1300);

    const flashTimeout = setTimeout(() => {
      setStage('complete');
    }, 1900);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(timeline);
      clearTimeout(logoTimeout);
      clearTimeout(flashTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[10000] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center overflow-hidden"
      >
        {/* Particules de fond animées */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-600 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Oiseau qui s'envole */}
        <AnimatePresence>
          {stage === 'bird' && (
            <motion.div
              key="bird"
              initial={{ opacity: 0, scale: 0.5, x: -200, y: 100 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                x: [0, 100, 200, 300, 400],
                y: [0, -50, -100, -150, -200],
                rotate: [0, 10, 20, 15, 0],
              }}
              exit={{ 
                opacity: 0,
                scale: 0.3,
                x: 600,
                y: -300,
                rotate: 45,
              }}
              transition={{ 
                duration: 2,
                ease: 'easeInOut',
              }}
              className="absolute z-20"
            >
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="text-primary-400"
              >
                {/* Corps de l'oiseau */}
                <motion.ellipse
                  cx="60"
                  cy="60"
                  rx="25"
                  ry="15"
                  fill="currentColor"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: Infinity,
                  }}
                />
                {/* Tête */}
                <circle cx="45" cy="55" r="12" fill="currentColor" />
                {/* Œil */}
                <circle cx="42" cy="52" r="3" fill="#1e3a8a" />
                {/* Ailes */}
                <motion.path
                  d="M 50 60 Q 30 40 20 50 Q 30 60 50 60"
                  fill="currentColor"
                  initial={{ d: "M 50 60 Q 30 40 20 50 Q 30 60 50 60" }}
                  animate={{
                    d: [
                      "M 50 60 Q 30 40 20 50 Q 30 60 50 60",
                      "M 50 60 Q 20 30 10 50 Q 20 60 50 60",
                      "M 50 60 Q 30 40 20 50 Q 30 60 50 60",
                    ],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                  }}
                />
                <motion.path
                  d="M 70 60 Q 90 40 100 50 Q 90 60 70 60"
                  fill="currentColor"
                  initial={{ d: "M 70 60 Q 90 40 100 50 Q 90 60 70 60" }}
                  animate={{
                    d: [
                      "M 70 60 Q 90 40 100 50 Q 90 60 70 60",
                      "M 70 60 Q 100 30 110 50 Q 100 60 70 60",
                      "M 70 60 Q 90 40 100 50 Q 90 60 70 60",
                    ],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: 0.15,
                  }}
                />
                {/* Queue */}
                <motion.path
                  d="M 80 60 L 95 50 L 95 70 Z"
                  fill="currentColor"
                  animate={{
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                  }}
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Logo qui apparaît */}
        <AnimatePresence>
          {(stage === 'logo' || stage === 'flash' || stage === 'complete') && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.3, y: 50 }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{ 
                opacity: 0,
                scale: 0.8,
              }}
              transition={{ 
                duration: 1,
                ease: 'easeOut',
              }}
              className="absolute z-10"
            >
              <motion.img
                src={logo}
                alt="Logo"
                className="h-32 w-auto object-contain"
                animate={{
                  filter: [
                    'drop-shadow(0 0 20px rgba(30, 64, 175, 0.5))',
                    'drop-shadow(0 0 40px rgba(30, 64, 175, 0.8))',
                    'drop-shadow(0 0 20px rgba(30, 64, 175, 0.5))',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Texte "Mon site vient" avec effet flash */}
        <AnimatePresence>
          {showFlash && stage === 'flash' && (
            <motion.div
              key="flash"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                y: 0,
                scale: [0.8, 1, 1, 0.9],
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.5,
                times: [0, 0.2, 0.8, 1],
              }}
              className="absolute bottom-32 z-30"
            >
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(30, 64, 175, 0.5)',
                    '0 0 30px rgba(30, 64, 175, 0.8), 0 0 50px rgba(153, 27, 27, 0.6)',
                    '0 0 10px rgba(30, 64, 175, 0.5)',
                  ],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              >
                Bienvenue
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barre de chargement */}
        <motion.div
          className="absolute bottom-20 w-64 h-1 bg-slate-700 rounded-full overflow-hidden z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 2.2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

