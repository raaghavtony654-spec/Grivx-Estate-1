const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-10 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
           <h2 className="text-3xl font-bold tracking-widest mb-4">GROVIX <span className="font-light italic text-white/50">restates</span></h2>
           <p className="text-white/50 text-sm leading-relaxed max-w-sm">
             Pioneering the intersection of raw nature and avant-garde luxury architecture. 
             We build environments, not just houses.
           </p>
        </div>
        <div>
           <h4 className="text-white font-semibold tracking-wider mb-6 text-sm">OFFICES</h4>
           <ul className="text-white/50 space-y-3 text-sm">
             <li>Zermatt, Switzerland</li>
             <li>Kyoto, Japan</li>
             <li>Aspen, Colorado</li>
           </ul>
        </div>
        <div>
           <h4 className="text-white font-semibold tracking-wider mb-6 text-sm">CONTACT</h4>
           <ul className="text-white/50 space-y-3 text-sm">
             <li>inquiries@grovixrestates.com</li>
             <li>+41 44 668 18 00</li>
             <li className="pt-4 flex gap-4 text-white">
                <a href="#" className="hover:text-white/70 transition-colors">IG</a>
                <a href="#" className="hover:text-white/70 transition-colors">X</a>
                <a href="#" className="hover:text-white/70 transition-colors">IN</a>
             </li>
           </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-medium tracking-wide uppercase">
         <p>© 2026 Grovix Restates. All rights reserved.</p>
         <div className="flex gap-6 mt-4 md:mt-0">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
