import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 90,
      duration: 1500,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

