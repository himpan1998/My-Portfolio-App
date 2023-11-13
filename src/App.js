import "./App.css";
import Topbar from "./Components/Topbar";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div class="App">
      <Topbar/>
      <Header/>
      <Intro/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
export default App;
