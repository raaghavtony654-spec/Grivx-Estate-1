import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';

const Hero = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 5000); // Changed to 5 seconds
    return () => clearInterval(timer);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Mouse interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgOffsetX = useTransform(smoothMouseX, [-1, 1], ["-1%", "1%"]);
  
  const textOffsetX = useTransform(smoothMouseX, [-1, 1], ["-3%", "3%"]);
  const textOffsetY = useTransform(smoothMouseY, [-1, 1], ["-3%", "3%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -1 to 1
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const project = projectsData[currentIndex];

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden bg-[#111]"
    >
      
      {/* Background Image Layer */}
      <motion.div 
        style={{ y: imageY, x: bgOffsetX, scale: 1.05 }}
        className="absolute inset-0 w-full h-full"
      >
        <AnimatePresence>
          <motion.img 
            key={`bg-${project.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Vignette Overlay for darker edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80 pointer-events-none" />
      </motion.div>

      {/* Parallax Text Layer */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`title-${project.id}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ y: textY, x: textOffsetX }}
          className={`absolute inset-0 flex items-start pointer-events-none z-10 ${project.primaryPosition || 'justify-center pt-[8vh]'}`}
        >
          <h1 className="text-[13vw] font-bold text-[#F0EBE1] leading-none tracking-tighter select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-95">
            {project.primaryText}
          </h1>
        </motion.div>
      </AnimatePresence>
      
      {/* Optional Cursive Text Overlapping */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`subtitle-${project.id}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ x: textOffsetX, y: textOffsetY }}
          className={`absolute z-20 pointer-events-none ${project.secondaryPosition || 'bottom-[20%] right-[8%]'}`}
        >
          <h2 className="font-serif italic text-6xl md:text-[8rem] text-white/90 font-light drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            {project.secondaryText}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Info Glass Card */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`info-${project.id}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-24 left-10 z-30 max-w-sm"
        >
          <div className="glass rounded-xl p-6 relative">
            {/* Connector dot and line */}
            <div className="absolute -top-[120px] left-10 w-[1px] h-[120px] bg-white/40">
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </div>
            
            <div className="space-y-1 text-xs text-white/80 font-medium">
              <p>Studio: <span className="text-white">{project.studio}</span></p>
              <p>Architects: <span className="text-white">{project.architects}</span></p>
              <p>Location: <span className="text-white">{project.location}</span></p>
              <p>Area: <span className="text-white">{project.area}</span></p>
              <p>Year: <span className="text-white">{project.year}</span></p>
              <p>Category: <span className="text-white">{project.category}</span></p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer-like text in hero */}
      <div className="absolute bottom-10 right-10 z-30 max-w-md text-xs text-white/60 text-right leading-relaxed font-medium">
        <p>Flexible space with sliding doors and concealed entrance embodies the dialogue of avant-garde architecture with severe climate.</p>
      </div>

      <div className="absolute bottom-10 left-[60%] z-30 max-w-[250px] text-xs text-white/60 leading-relaxed font-medium">
        <p>Modern minimalism in mountain steppes: compact house on stilts, protected from the heat by openwork slatted screens, reveals panoramic windows to endless landscapes.</p>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-10 left-10 z-30 flex gap-4">
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white transition-transform hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white transition-transform hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white transition-transform hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </button>
      </div>
      
      {/* Decorative dot right side */}
      <div className="absolute top-[40%] right-[30%] z-30">
         <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </div>

    </div>
  );
};

export default Hero;
