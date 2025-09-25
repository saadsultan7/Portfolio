import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Lazy imports
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 90,
      duration: 1500,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Suspense>
  );
}

export default App;
