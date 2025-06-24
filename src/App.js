import "./App.css";
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Gallery from "./Components/Gallery";
import Certification from "./Components/Certification";
import Publications from "./Components/Publications";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div class="App">
      <Topbar />
      <Header />
      <Intro />
      <Education />
      <Publications />
      <Gallery />
      <Certification />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
