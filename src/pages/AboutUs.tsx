import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-10 min-h-screen flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-10 text-center"
        >
          Our <span className="font-serif italic text-primary font-light">Story</span>
        </motion.h1>
        
        <div className="max-w-4xl mx-auto space-y-8 text-white/70 text-lg leading-relaxed">
          <p>
            Founded in 2026, Grovix Restates emerged from a singular vision: to transcend traditional real estate and create living spaces that function as functional art. Our designs are deeply rooted in the context of their environments, drawing inspiration from the harsh, beautiful landscapes they inhabit.
          </p>
          <p>
            We believe that true luxury lies in harmony—the seamless integration of avant-garde architecture, cutting-edge sustainability, and raw natural beauty.
          </p>
        </div>

        <div className="mt-20 w-full max-w-6xl h-[50vh] rounded-2xl overflow-hidden relative">
           <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="About Us"
              className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutUs;
