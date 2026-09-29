import React, { useEffect, useState } from 'react';

export const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden" 
      aria-hidden="true"
    >
      {/* Base Light Background */}
      <div className="absolute inset-0 bg-[#FBFDFF]" />

      {/* Parallax Grid Pattern matching the exact uploaded image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.95) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.95) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
          backgroundPosition: `0px ${-(scrollY * 0.22)}px`,
          willChange: 'background-position',
        }}
      />

      {/* Subtle top glow for enterprise depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/5 via-sky-500/3 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
};
