import  { lazy } from 'react'
const Navbar = lazy(() => import("../components/Navbar"));
const Home = lazy(() => import("../components/Home"));
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

export default function LandingPage() {
  return (<>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
  </>
  )
}
