import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import CursorGlow from "./components/CursorGlow";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <Loader show={loading} />
      <CursorGlow />

      <div className="fixed inset-0 -z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="/bv.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-10 w-[520px] h-[520px] bg-purple-600 rounded-full blur-[150px] animate-floaty" />
        <div className="absolute top-20 right-10 w-[520px] h-[520px] bg-blue-600 rounded-full blur-[150px] animate-floaty" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-pink-600 rounded-full blur-[170px] animate-floaty" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
