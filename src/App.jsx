import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navbar/Navigation";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div
      className="bg-cover bg-center h-screen overflow-auto"
      style={{
        backgroundImage: "url('3.jpg')",
      }}
    >
      <Navigation />
      <Home className="sm:px-10 md:px-20 lg:px-[120px] sm:h-[calc(100%-64px)] py-5 mt-5" />
      <About className="sm:px-10 md:px-20 lg:px-[120px] sm:h-[calc(100%-64px)] py-10 mt-10" />
      <Services className="sm:px-10 md:px-20 lg:px-[120px] py-10 mt-10" />
      <Skills className="sm:px-10 md:px-20 lg:px-[120px] py-10 mt-10" />
      {/* <Projects className="sm:px-10 md:px-20 lg:px-[120px] py-10 mt-10" /> */}
      <Experience className="sm:px-10 md:px-20 lg:px-[120px] py-10 " />
      <Contact className="sm:px-10 md:px-20 lg:px-[120px] py-10 mt-10" />
      <ToastContainer />
    </div>
  );
}

export default App;
