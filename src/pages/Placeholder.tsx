import { PageTransition } from '../components/PageTransition';

const Placeholder = ({ title }: { title: string }) => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-10 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 text-center">
          {title}
        </h1>
        <p className="text-white/50 tracking-widest uppercase text-sm">Coming Soon</p>
      </div>
    </PageTransition>
  );
};

export default Placeholder;
