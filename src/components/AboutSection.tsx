import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative py-32 px-10 bg-background text-white min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Designing <br/>
            <span className="font-serif italic font-light text-primary">tomorrow's</span> <br/>
            heritage.
          </h2>
          <p className="text-white/60 text-lg max-w-md leading-relaxed">
            At Grovix Restates, we don't just build homes; we sculpt experiences. Every line, every material, and every ray of light is meticulously curated to elevate the human spirit and harmonize with nature.
          </p>
          <button className="px-8 py-3 rounded-full border border-white/20 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
            Discover Our Vision
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior Architecture" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
