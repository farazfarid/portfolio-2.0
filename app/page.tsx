"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ThemeProvider } from "next-themes";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsLight from "./components/3DComponents/StarsLight";
import StarsDark from "./components/3DComponents/StarsDark";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#89cff0]/80">
        <Header />

        <section id="hero" className="snap-end">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-end">
          <div className="relative z-0">
            <Contact />
            <div className="hidden dark:flex">
              <StarsLight />
            </div>
            <div className="flex dark:hidden">
              <StarsDark />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
