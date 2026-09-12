import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import {
  site,
  socialLinks,
  mailto,
  telLink,
  orbitRoles,
  scrollToSection,
} from '../config/site';

import { portraitPhotos } from '../utils/imagePaths';

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
      sphereRef.current.position.x = mouseRef.current.x * 0.35;
      sphereRef.current.position.y = mouseRef.current.y * 0.35;
    }
  });

  return (
    <Sphere ref={sphereRef as any} visible args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#0f172a"
        attach="material"
        distort={0.45}
        speed={1.8}
        roughness={0.08}
        metalness={0.92}
        emissive="#d4af37"
        emissiveIntensity={0.28}
      />
    </Sphere>
  );
};

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    setShowCanvas(desktop);
  }, []);

  const contactInfo = [
    { icon: Mail, text: site.email, link: mailto },
    { icon: Phone, text: site.phone, link: telLink },
    { icon: MapPin, text: site.location, link: site.mapsUrl },
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(37,99,235,0.18),transparent_40%),linear-gradient(180deg,#020617,#0b1224 55%,#020617)]" />

      {showCanvas && (
        <div className="pointer-events-none absolute right-[-8%] top-16 hidden h-[560px] w-[560px] opacity-50 lg:block">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.45} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-8, -6, 4]} intensity={0.7} color="#d4af37" />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
          </Canvas>
        </div>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl text-gold-300 sm:text-3xl"
          >
            Hello
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-gold-400">
              {site.title}
            </p>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl">
              <span className="block text-white">Je suis</span>
              <span className="gold-shimmer block">{site.firstName}</span>
              <span className="block text-gold-400">{site.lastName}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {contactInfo.map((info) => (
              <a
                key={info.text}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-card group flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:border-gold-400/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-300">
                  <info.icon size={18} />
                </span>
                <span className="text-sm font-medium text-slate-100 group-hover:text-gold-200">{info.text}</span>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-gold-500/30 transition hover:scale-[1.03]"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-2xl border border-gold-400/50 px-6 py-3.5 text-sm font-semibold text-gold-200 transition hover:bg-gold-500/10"
            >
              Me contacter
            </button>
            <a
              href={site.cvHref}
              download={site.cvFileName}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-gold-400/60 hover:text-gold-200"
            >
              <Download size={18} />
              Télécharger le CV
            </a>
          </motion.div>

          <div className="flex items-center gap-3">
            {[
              { href: socialLinks.github, icon: Github, label: 'GitHub' },
              { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: socialLinks.instagram, icon: Instagram, label: 'Instagram' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-gold-400 hover:text-gold-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative mx-auto flex w-full max-w-[420px] flex-col items-center justify-center py-10 lg:max-w-none lg:py-6"
        >
          <div className="relative w-full max-w-[340px]">
            <div className="absolute inset-[-8%] rounded-[2rem] bg-gradient-to-br from-gold-400/25 via-blue-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold-400/60 shadow-[0_0_50px_rgba(212,175,55,0.28)]">
              <img
                src={portraitPhotos.hero}
                alt={site.name}
                width={680}
                height={900}
                fetchPriority="high"
                className="aspect-[3/4] h-auto w-full object-cover object-[center_18%]"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              {orbitRoles.map((role, index) => {
                const angle = (index / orbitRoles.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 58;
                const y = 50 + Math.sin(angle) * 52;
                return (
                  <span
                    key={role}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/40 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-gold-100 shadow-lg backdrop-blur"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {role}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:hidden">
            {orbitRoles.map((role) => (
              <span key={role} className="rounded-full border border-gold-400/30 bg-slate-900/70 px-3 py-1 text-xs text-gold-100">
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
