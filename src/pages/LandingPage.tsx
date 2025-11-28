import { lazy } from 'react'
const Navbar = lazy(() => import("../components/Navbar"));
const Contact = lazy(() => import("../components/Contact"));
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));

export default function LandingPage() {
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
