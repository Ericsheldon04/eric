import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';

// Mocking 3D Photo as a geometric crystal or torus
const CenterModel = () => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#00E5FF" wireframe />
      </mesh>
    </Float>
  );
};

// Tech Stack Floating Icons (using simple text/shapes for now)
const TechStack = () => {
  return (
    <group position={[3, 0, 0]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[0, 2, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#61DAFB" /> {/* React */}
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2} position={[2, 1, 0]}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#42A5F5" /> {/* Flutter */}
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[1, -1, 0]}>
        <mesh>
          <torusGeometry args={[0.4, 0.2, 16, 100]} />
          <meshStandardMaterial color="#68A063" /> {/* Node */}
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={1} floatIntensity={3} position={[-1, -2, 0]}>
        <mesh>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#336791" /> {/* Postgres */}
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[2, -2, -1]}>
        <mesh>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#F05032" /> {/* Git */}
        </mesh>
      </Float>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00E5FF" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#7C3AED" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <CenterModel />
          <TechStack />
          {/* <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
        </Canvas>
      </div>

      <div className="container mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Side: Titles */}
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 4.5 }} // After loader
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-white">ERIC </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text">SHELDON</span>
            </h1>
            
            <div className="mt-8 space-y-4">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-[2px] bg-primary"></div>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">Full Stack Developer</h2>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-[2px] bg-secondary"></div>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">UI/UX Designer</h2>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-[2px] bg-white"></div>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">Creative Problem Solver</h2>
              </motion.div>
            </div>
            
            <motion.button
              className="mt-12 px-8 py-4 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 rounded-full text-lg tracking-wider neon-glow font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE MY UNIVERSE
            </motion.button>
          </motion.div>
        </div>
        
        {/* Right Side: (Reserved for 3D layout visual balance, handled by canvas) */}
        <div className="hidden md:flex items-center justify-end h-full">
          {/* We can place labels for the tech stack here if needed, but 3D canvas handles it */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
