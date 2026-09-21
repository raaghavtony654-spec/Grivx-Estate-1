import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center"
    >
      <div className="flex gap-4">
        <Link 
          to="/"
          className={`px-6 py-2 rounded-full ${location.pathname === '/' ? 'bg-white text-black' : 'border border-white/30 text-white hover:bg-white/10'} font-semibold text-xs tracking-wider transition-all hover:scale-105 backdrop-blur-md inline-block`}
        >
          MAIN
        </Link>
        <Link 
          to="/about"
          className={`px-6 py-2 rounded-full ${location.pathname === '/about' ? 'bg-white text-black' : 'border border-white/30 text-white hover:bg-white/10'} font-medium text-xs tracking-wider backdrop-blur-md transition-all hover:scale-105 inline-block`}
        >
          ABOUT US
        </Link>
        <Link 
          to="/projects"
          className={`px-6 py-2 rounded-full ${location.pathname === '/projects' ? 'bg-white text-black' : 'border border-white/30 text-white hover:bg-white/10'} font-medium text-xs tracking-wider backdrop-blur-md transition-all hover:scale-105 inline-block`}
        >
          PROJECTS
        </Link>
        <Link 
          to="/publications"
          className={`px-6 py-2 rounded-full ${location.pathname === '/publications' ? 'bg-white text-black' : 'border border-white/30 text-white hover:bg-white/10'} font-medium text-xs tracking-wider backdrop-blur-md transition-all hover:scale-105 inline-block`}
        >
          PUBLICATIONS
        </Link>
        <Link 
          to="/cost"
          className={`px-6 py-2 rounded-full ${location.pathname === '/cost' ? 'bg-white text-black' : 'border border-white/30 text-white hover:bg-white/10'} font-medium text-xs tracking-wider backdrop-blur-md transition-all hover:scale-105 inline-block`}
        >
          COST
        </Link>
      </div>

      <Link to="/">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-3 grid-rows-3 gap-0.5 w-6 h-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-white rounded-sm w-full h-full" />
            ))}
          </div>
          {/* Framer Motion Layout ID provides the cool 3D continuity feel for the logo */}
          <motion.span 
            layoutId="main-logo"
            className="text-white font-bold tracking-widest text-lg leading-none inline-block"
          >
            GROVIX<br/><span className="text-[10px] font-normal tracking-normal text-white/70 block">restates</span>
          </motion.span>
        </div>
      </Link>

      <div className="flex gap-6 items-center">
        <a href="#" className="text-white/80 hover:text-white text-xs tracking-wider font-medium uppercase transition-colors">
          Contacts
        </a>
        <a href="#" className="flex items-center gap-2 text-white/80 hover:text-white text-xs tracking-wider font-medium uppercase transition-colors">
          Order a Project
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
