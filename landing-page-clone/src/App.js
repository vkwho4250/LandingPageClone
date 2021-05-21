import "./styles/css/styles.css";
import { useState } from "react";

import Home from "./sections/Home";
import Practice from "./sections/Practice";
import Awards from "./sections/Awards";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import TopNavBar from "./components/TopNavBar";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import Menu from "./components/Menu";
import Request from "./components/Request";

function App() {
   const [menuOpened, setMenuOpened] = useState(false);
   const [requestOpened, setRequestOpened] = useState(false);
   const [currentSection, setCurrentSection] = useState("home-page");

   function changeCurrentSection(id) {
      setCurrentSection(id);
   }

   function changeMenuOpened() {
      setMenuOpened(!menuOpened);
   }

   function changeRequestOpened() {
      setRequestOpened(!requestOpened);
   }

   return (
      <div
         id="app"
         className={
            currentSection === "awards-page" ||
            currentSection === "projects-page"
               ? "dark-mode"
               : ""
         }
      >
         <TopNavBar changeMenuOpened={changeMenuOpened} />

         <Menu
            changeMenuOpened={changeMenuOpened}
            menuOpened={menuOpened}
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
         <Request
            changeRequestOpened={changeRequestOpened}
            requestOpened={requestOpened}
         />
         <LeftSidebar changeMenuOpened={changeMenuOpened} />
         <RightSidebar
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
            currentSection={currentSection}
         />

         <Home changeCurrentSection={changeCurrentSection} />
         <Practice
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
         <Awards
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
         <Projects changeCurrentSection={changeCurrentSection} />
         <Services
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
         <About
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
         <Contact
            changeRequestOpened={changeRequestOpened}
            changeCurrentSection={changeCurrentSection}
         />
      </div>
   );
}

export default App;
