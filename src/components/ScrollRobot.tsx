import { useRef, useEffect, useState } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Forme géométrique élégante et abstraite
const FloatingOrb = ({ time }: { time: number; scrollProgress: number }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (orbRef.current && groupRef.current) {
      // Rotation lente et fluide
      orbRef.current.rotation.x = time * 0.3;
      orbRef.current.rotation.y = time * 0.5;
      orbRef.current.rotation.z = time * 0.2;
      
      // Légère pulsation
      const scale = 1 + Math.sin(time * 2) * 0.1;
      orbRef.current.scale.set(scale, scale, scale);
      
      // Rotation du groupe pour effet de flottement
      groupRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sphère principale avec effet glassmorphism */}
      <Sphere ref={orbRef} args={[0.4, 32, 32]}>
        <meshStandardMaterial
          color="#1e40af"
          metalness={0.9}
          roughness={0.1}
          emissive="#2563eb"
          emissiveIntensity={0.3}
          transparent
          opacity={0.85}
        />
      </Sphere>
      
      {/* Anneau externe élégant */}
      <Torus args={[0.55, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, time * 0.5]}>
        <meshStandardMaterial
          color="#991b1b"
          emissive="#991b1b"
          emissiveIntensity={1}
          metalness={1}
          roughness={0}
        />
      </Torus>
      
      {/* Anneau interne */}
      <Torus args={[0.45, 0.015, 16, 100]} rotation={[Math.PI / 2, 0, -time * 0.3]}>
        <meshStandardMaterial
          color="#1e40af"
          emissive="#2563eb"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0}
        />
      </Torus>
      
      {/* Particules internes */}
      {[...Array(6)].map((_, i) => (
        <Octahedron
          key={i}
          args={[0.08, 0]}
          position={[
            Math.sin(i * Math.PI / 3 + time) * 0.25,
            Math.cos(i * Math.PI / 3 + time) * 0.25,
            Math.sin(i * Math.PI / 3 + time * 0.5) * 0.25,
          ]}
          rotation={[time * 0.5, time * 0.3, time * 0.4]}
        >
          <meshStandardMaterial
            color="#991b1b"
            emissive="#991b1b"
            emissiveIntensity={1.5}
            transparent
            opacity={0.7}
          />
        </Octahedron>
      ))}
    </group>
  );
};

// Particules flottantes autour de l'orbe principal
const FloatingParticles = ({ time }: { time: number; scrollProgress: number }) => {
  return (
    <>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 1.2 + Math.sin(time + i) * 0.3;
        const height = Math.sin(time * 0.5 + i) * 0.8;
        
        return (
          <Sphere
            key={i}
            args={[0.02, 8, 8]}
            position={[
              Math.cos(angle + time * 0.3) * radius,
              height,
              Math.sin(angle + time * 0.3) * radius,
            ]}
          >
            <meshStandardMaterial
              color="#1e40af"
              emissive="#2563eb"
              emissiveIntensity={2}
              transparent
              opacity={0.6 + Math.sin(time * 2 + i) * 0.3}
            />
          </Sphere>
        );
      })}
    </>
  );
};

const FloatingElement = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0, z: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0, z: 0 });

  // Calculer la position basée sur le scroll - mouvement fluide et élégant
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const totalSections = sections.length;
    const sectionIndex = Math.floor(scrollProgress * totalSections);
    const sectionProgress = (scrollProgress * totalSections) % 1;

    // Positions harmonieuses qui suivent le scroll
    const xPositions = [-2.5, 2.5, -2.5, 2.5, -2.5, 2.5, -1.5];
    const yPositions = [1.8, 1.3, 0.8, 0.3, -0.2, -0.7, -1.2];
    
    const currentX = xPositions[Math.min(sectionIndex, xPositions.length - 1)];
    const nextX = xPositions[Math.min(sectionIndex + 1, xPositions.length - 1)] || currentX;
    const currentY = yPositions[Math.min(sectionIndex, yPositions.length - 1)];
    const nextY = yPositions[Math.min(sectionIndex + 1, yPositions.length - 1)] || currentY;

    const newX = currentX + (nextX - currentX) * sectionProgress;
    const newY = currentY + (nextY - currentY) * sectionProgress;
    const newZ = -2.5 + Math.sin(scrollProgress * Math.PI * 2) * 0.3;

    setTargetPosition({ x: newX, y: newY, z: newZ });
  }, [scrollProgress]);

  // Animation fluide vers la position cible
  useFrame((_, delta) => {
    timeRef.current += delta;
    
    if (groupRef.current) {
      const lerp = 0.08; // Mouvement très fluide
      setCurrentPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * lerp,
        y: prev.y + (targetPosition.y - prev.y) * lerp,
        z: prev.z + (targetPosition.z - prev.z) * lerp,
      }));

      groupRef.current.position.set(
        currentPosition.x,
        currentPosition.y,
        currentPosition.z
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 1.8, -2.5]}>
      <FloatingOrb time={timeRef.current} scrollProgress={scrollProgress} />
      <FloatingParticles time={timeRef.current} scrollProgress={scrollProgress} />
    </group>
  );
};

const ScrollRobot = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-40 hidden h-full w-full lg:block">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-5, 5, -3]} intensity={1.2} color="#991b1b" />
        <pointLight position={[5, 5, -3]} intensity={0.8} color="#1e40af" />
        <pointLight position={[0, -5, -2]} intensity={0.6} color="#2563eb" />
        <FloatingElement scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ScrollRobot;
