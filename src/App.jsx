import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ParticlesBackground from "./components/ParticlesBackground";
import MouseGlow from "./components/MouseGlow";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      <ParticlesBackground />
      <MouseGlow />

      {/* LOADER */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certificate />
          <Contact />
          <Footer />
        </>
      )}

    </div>
  );
}