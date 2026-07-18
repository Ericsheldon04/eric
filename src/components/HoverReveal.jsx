import React, { useRef, useState } from 'react';

const HoverReveal = ({ baseImage, revealImage, className }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Revealed Image (Real Photo) - BOTTOM LAYER */}
      <img 
        src={revealImage} 
        alt="Reveal" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
      />

      {/* Base Image (Iron Man) - TOP LAYER */}
      <img 
        src={baseImage} 
        alt="Base" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        style={{
          WebkitMaskImage: isHovered ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 20%, black 70%)` : 'none',
          maskImage: isHovered ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent 20%, black 70%)` : 'none',
          transition: 'mask-image 0.2s ease, -webkit-mask-image 0.2s ease'
        }}
      />
    </div>
  );
};

export default HoverReveal;
