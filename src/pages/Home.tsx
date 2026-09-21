import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsGallery from '../components/ProjectsGallery';
import { PageTransition } from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <ProjectsGallery />
    </PageTransition>
  );
};

export default Home;
