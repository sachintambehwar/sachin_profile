import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
