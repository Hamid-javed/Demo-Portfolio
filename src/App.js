import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact/>
     </>
  );
}

export default App;
