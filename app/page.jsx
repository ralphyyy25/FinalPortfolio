import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import GuestbookButton from '@/components/GuestbookButton';
import GuestbookModal from '@/components/GuestbookModal';
import ProjectModal from '@/components/ProjectModal';
import Toast from '@/components/Toast';

export default function Page() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <div style={{ position: 'relative', zIndex: 20, background: 'var(--bg)', marginTop: -1, borderRadius: '24px 24px 0 0' }}>
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <GuestbookButton />
      <GuestbookModal />
      <ProjectModal />
      <Toast />
    </>
  );
}
