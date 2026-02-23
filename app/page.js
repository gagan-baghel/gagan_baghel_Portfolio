import HomeEffects from '../components/HomeEffects';
import Loader from '../components/Loader';
import MainNav from '../components/MainNav';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';
import HeroSection from '../components/home/HeroSection';
import HomeFooter from '../components/home/HomeFooter';
import ProjectsCtaSection from '../components/home/ProjectsCtaSection';
import SkillsSection from '../components/home/SkillsSection';
import WorkflowSection from '../components/home/WorkflowSection';

export default function HomePage() {
  return (
    <>
      <HomeEffects />
      <MainNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsCtaSection />
      <WorkflowSection />
      <ContactSection />
      <HomeFooter />
      <Loader titleClassName="loaderh1 sm:text-[30px] text-[15px] text-center w-full" />
    </>
  );
}
