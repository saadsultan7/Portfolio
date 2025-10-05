import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useEffect, useState, Suspense, lazy } from "react";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
    useEffect(() => {
    AOS.init({
      offset: 90,
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
