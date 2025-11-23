import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.001;
      sphereRef.current.rotation.y += 0.001;
      // Parallax effect basé sur la position de la souris
      sphereRef.current.position.x = mouseRef.current.x * 0.5;
      sphereRef.current.position.y = mouseRef.current.y * 0.5;
    }
  });

  return (
    <Sphere ref={sphereRef as any} visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#1e40af"
        attach="material"
        distort={0.6}
        speed={2.5}
        roughness={0.1}
        metalness={0.8}
        emissive="#2563eb"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
};

const Hero = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: 'kandilare20@gmail.com',
      link: 'mailto:kandilare20@gmail.com',
      color: 'primary',
    },
    {
      icon: Phone,
      text: '+228 91 67 61 67',
      link: 'tel:+22891676167',
      color: 'primary',
    },
    {
      icon: MapPin,
      text: 'Lomé, Togo',
      link: null,
      color: 'primary',
    },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-slate-950 to-red-950"></div>
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]"
        style={{ backgroundSize: '200% 200%' }}
      />
      <motion.div
        animate={{
          backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_50%)]"
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Particules animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
            </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent pointer-events-none z-10"></div>
          
          <div className="space-y-8 relative z-20">
            {/* Titre avec animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 relative z-20"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-primary-300 text-lg font-semibold tracking-wide uppercase drop-shadow-lg relative"
                style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)' }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 30px rgba(59, 130, 246, 0.8)',
                      '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Développeur Mobile & IA
                </motion.span>
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl sm:text-7xl font-bold drop-shadow-2xl"
                style={{ textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent block relative"
                  style={{ 
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4), 0 4px 8px rgba(0, 0, 0, 0.9)',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent bg-[length:200%_auto]"
                  >
                    Kandi Salman
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="bg-gradient-to-r from-red-300 via-red-200 to-red-400 bg-clip-text text-transparent block relative"
                  style={{ 
                    textShadow: '0 0 20px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.4), 0 4px 8px rgba(0, 0, 0, 0.9)',
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.8))'
                  }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="bg-gradient-to-r from-red-300 via-red-200 to-red-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                  >
                    LARE
                  </motion.span>
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg text-gray-100 leading-relaxed font-medium drop-shadow-lg relative"
                style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Étudiant passionné en informatique, spécialisé en développement mobile et intelligence artificielle
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Informations de contact avec animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 px-4 py-3 rounded-xl backdrop-blur-md border border-primary-700/30 hover:border-primary-500/60 transition-all duration-300 shadow-lg hover:shadow-primary-500/20 group relative overflow-hidden"
                >
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300 relative z-10"
                  >
                    <info.icon size={20} className="text-primary-300 group-hover:text-primary-200" />
                  </motion.div>
                  
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-gray-200 hover:text-primary-200 transition-colors relative z-10 font-medium"
                      style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-200 relative z-10 font-medium" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)' }}>
                      {info.text}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons CTA avec animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Offset pour la navbar
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-xl font-semibold text-white shadow-xl shadow-primary-500/50 transition-all duration-300 flex items-center gap-2 glow-pulse relative overflow-hidden group cursor-pointer"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.span
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(59, 130, 246, 0.8)',
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl"
                />
                <span className="relative z-10">Voir mes projets</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Offset pour la navbar
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="px-8 py-4 border-2 border-primary-500 rounded-xl font-semibold text-primary-400 hover:bg-primary-600/20 hover:border-primary-400 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/30 relative overflow-hidden group cursor-pointer"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-400/20 to-primary-500/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Me contacter</span>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={new URL('../cv/CV-LARE-Kandi-Salman-.pdf', import.meta.url).href}
                download="CV-Kandi-Salman-LARE.pdf"
                className="px-8 py-4 border-2 border-accent-500 rounded-xl font-semibold text-accent-400 hover:bg-accent-600/20 hover:border-accent-400 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-accent-500/30 relative overflow-hidden group cursor-pointer"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-accent-400/20 to-accent-500/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">CV</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[500px] lg:h-[600px] relative z-0"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-primary-600/20 to-red-500/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] rounded-full blur-2xl"
            />
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, 5]} intensity={0.5} color="#3b82f6" />
              <pointLight position={[10, -10, 5]} intensity={0.5} color="#dc2626" />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
