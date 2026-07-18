import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    // Automatically complete loading after the animation
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // 4.5s for the whole sequence
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Background Particles/Glow Effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] opacity-20 animate-pulse" />
      </motion.div>

      {/* Text Reveal Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Name Reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-5xl md:text-8xl font-bold tracking-widest text-white neon-text"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          >
            ERIC
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl md:text-8xl font-bold tracking-widest text-white neon-text"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.7 }}
          >
            SHELDON
          </motion.h1>
        </div>

        {/* Subtitle Reveal */}
        <div className="overflow-hidden">
          <motion.p
            className="text-xl md:text-2xl font-light text-primary tracking-[0.2em]"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1.5 }}
          >
            Full Stack Developer
          </motion.p>
        </div>

        {/* Loading Bar */}
        <motion.div
          className="w-48 h-[2px] bg-white/20 mt-12 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-full bg-primary neon-glow"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 2.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
