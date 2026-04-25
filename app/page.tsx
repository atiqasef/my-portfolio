import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <main className="relative">
      <GridBackground />
      <Navbar />
      <Hero />
      <div className="divider-line" />
      <About />
      <div className="divider-line" />
      <Skills />
      <div className="divider-line" />
      <Projects />
      <div className="divider-line" />
      <Services />
      <div className="divider-line" />
      <Contact />
      <Footer />
    </main>
  );
}
