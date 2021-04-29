import "./styles/css/styles.css";
import Home from "./views/Home";
import Practice from "./views/Practice";
import Awards from "./views/Awards";
import Projects from "./views/Projects";
import Services from "./views/Services";
import About from "./views/About";
import Contact from "./views/Contact";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";

function App() {
   return (
      <div className="App">
         <LeftSidebar />
         <RightSidebar />
         <Home />
         <Practice />
         <Awards />
         <Projects />
         <Services />
         <About />
         <Contact />
      </div>
   );
}

export default App;
