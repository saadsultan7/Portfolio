import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      setTimeout(() => {
        if (sectionId === 'Home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500); // Wait for components to load
      // Clear state to prevent re-scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (<>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </>
  )
}
