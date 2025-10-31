
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Experiences from "../Experiences";
// import Projects from "../Projects";
import Gallery from "../Gallery";
import Contact from "../Contact";


function LandingPage() {
  return (
    <div className="bg-neutral-900 text-white overflow-x-hidden">
      {/* Each section has its own ID for smooth scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="Experiences">
        <Experiences />
      </section>
      <section id="Gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <section id="Projects">
        <Projects />
      </section> */}

    </div>
  );
}

export default LandingPage;
