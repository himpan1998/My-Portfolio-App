import "./App.css";
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Gallery from "./Components/Gallery";
import Certification from "./Components/Certification";
import Publications from "./Components/Publications";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div class="App">
      {/* <Topbar />
      <Header />
      <Intro />
      <Education />
      <Publications />
      <Gallery />
      <Certification />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer /> */}
      <Topbar /> {/* Navigation bar at top */}
      <Header /> {/* Hero banner / name / tagline */}
      <Intro /> {/* Short personal intro / summary */}
      <Skills /> {/* Showcase your tech / domain skills early */}
      <Experience /> {/* Work experience to give credibility */}
      <Education /> {/* Education details after work */}
      <Publications />{" "}
      {/* Optional: move this after Education if academic focus */}
      <Portfolio /> {/* Showcase projects you've done */}
      <Gallery /> {/* Visual gallery — supplementing portfolio */}
      <Certification /> {/* Certifications add authority */}
      <Contact /> {/* Call to action — contact info */}
      <Footer /> {/* Footer: copyright, links */}
    </div>
  );
}
export default App;
