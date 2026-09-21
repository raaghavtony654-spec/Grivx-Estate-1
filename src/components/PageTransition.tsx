import React from 'react';
import { motion } from 'framer-motion';

const perspectiveVariants = {
  initial: {
    opacity: 0,
    rotateX: 10,
    scale: 0.9,
    y: 100,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] // Custom easing for premium feel
    }
  },
  exit: {
    opacity: 0,
    rotateX: -10,
    scale: 0.9,
    y: -100,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const PageTransition = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div style={{ perspective: '2000px' }} className={`w-full min-h-screen ${className}`}>
      <motion.div
        variants={perspectiveVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ transformOrigin: 'top center' }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};
