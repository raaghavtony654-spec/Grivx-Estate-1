import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

const projectsData = [
  {
    id: 1,
    title: "VILLA VERDE",
    location: "Lake Como, Italy",
    area: "850 m2",
    year: "2025",
    image: "https://images.unsplash.com/photo-1613490908571-9ce224a101b0?auto=format&fit=crop&q=80&w=1200",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "THE MONOLITH",
    location: "Oslo, Norway",
    area: "420 m2",
    year: "2026",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "DUNE HOUSE",
    location: "Dubai, UAE",
    area: "1200 m2",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    title: "SILENT PINE",
    location: "Whistler, Canada",
    area: "600 m2",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    colSpan: "col-span-1 md:col-span-2",
  }
];

const TiltCard = ({ project }: { project: typeof projectsData[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-[400px] md:h-[500px] rounded-3xl cursor-pointer ${project.colSpan} group`}
    >
      <div 
        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
        style={{ transform: "translateZ(0px)" }}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-500 group-hover:opacity-80" />
      </div>

      {/* 3D Popping Glassmorphism Card */}
      <div 
        className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl pointer-events-none flex flex-col justify-end transition-all duration-500 shadow-xl"
        style={{ transform: "translateZ(60px)" }}
      >
         <h3 className="text-3xl font-bold tracking-widest text-white mb-2 uppercase">{project.title}</h3>
         <div className="flex justify-between items-center text-white/70 text-sm font-medium tracking-wider">
           <span>{project.location}</span>
           <div className="flex gap-4">
             <span>{project.area}</span>
             <span>{project.year}</span>
           </div>
         </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageTransition>
      <div className="pt-40 pb-20 px-10 min-h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-16 text-center">
            Featured <span className="font-serif italic text-primary font-light">Estates</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
            {projectsData.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Projects;
