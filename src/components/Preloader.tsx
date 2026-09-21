import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Determine base artificial delay based on network speed (if supported by browser)
    // @ts-ignore
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const type = connection?.effectiveType || '4g';
    
    let baseDelay = 1500; // Good connection default delay
    if (type === '3g') baseDelay = 3000;
    if (type === '2g' || type === 'slow-2g') baseDelay = 6000;

    let isComplete = false;

    // Simulate progress bar filling up
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 90) return 90; // Hold at 90 until actual load is complete
        return p + (Math.random() * 20);
      });
    }, baseDelay / 10);

    const finishLoading = () => {
      if (isComplete) return;
      isComplete = true;
      clearInterval(interval);
      setProgress(100);
      
      // Give the progress bar time to visually reach 100% before triggering exit
      setTimeout(() => {
        onComplete();
      }, 600);
    };

    // 2. Wait for actual window load event (waits for images/styles)
    if (document.readyState === 'complete') {
      setTimeout(finishLoading, baseDelay);
    } else {
      window.addEventListener('load', finishLoading);
      // Fallback in case load event takes abnormally long
      setTimeout(finishLoading, baseDelay * 2.5);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', finishLoading);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
    >
      {/* 
        This uses layoutId="main-logo" so that when the preloader unmounts,
        Framer Motion will seamlessly morph this massive logo into the small navbar logo!
      */}
      <motion.span 
        layoutId="main-logo"
        className="text-white font-bold tracking-widest text-5xl md:text-7xl leading-none inline-block text-center"
      >
        GROVIX<br/><span className="text-sm md:text-xl font-normal tracking-normal text-white/70 block mt-2">restates</span>
      </motion.span>
      
      <div className="w-64 h-1 bg-white/10 mt-16 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-white"
          animate={{ width: `${Math.min(100, progress)}%` }}
          transition={{ ease: "linear", duration: 0.2 }}
        />
      </div>
      <div className="mt-4 text-white/40 text-xs font-mono tracking-widest">
        {Math.min(100, Math.floor(progress))}% / INITIALIZING
      </div>
    </motion.div>
  );
};

export default Preloader;
