import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

interface LocationState {
  scrollTo?: string;
}

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState | null;
    if (state?.scrollTo) {
      const sectionId = state.scrollTo;
      setTimeout(() => {
        if (sectionId === 'Home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
