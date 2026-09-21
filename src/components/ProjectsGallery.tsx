import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "LUMINA",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "AURA",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "ECHO",
    location: "Aspen, USA",
    image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "NOVA",
    location: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectsGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-20 left-10 z-10">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
             Featured <br/><span className="font-serif italic font-light text-primary">Estates</span>
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-10 mt-20">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[60vh] w-[70vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <h3 className="text-3xl font-bold text-white tracking-widest mb-2">{project.title}</h3>
                <p className="text-white/80 font-medium tracking-wider text-sm uppercase">{project.location}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
