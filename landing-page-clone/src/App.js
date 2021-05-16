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
import Menu from "./components/Menu";
import Request from "./components/Request";
import { useState } from "react";

function App() {
   const [menuOpened, setMenuOpened] = useState(false);
   const [darkMode, setDarkMode] = useState(false);
   const [itemHovered, setItemHovered] = useState("");

   function changeMenuOpened() {
      setMenuOpened(!menuOpened);
   }

   function changeItemHovered(e) {
      if (e.type === "mouseleave") {
         setItemHovered("");
      } else {
         setItemHovered(e.currentTarget.id);
         console.log(e.currentTarget.id);
      }
   }

   return (
      <div className="App">
         <LeftSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            changeMenuOpened={changeMenuOpened}
            darkMode={darkMode}
         />
         <RightSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            darkMode={darkMode}
         />
         <Menu
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            changeMenuOpened={changeMenuOpened}
            menuOpened={menuOpened}
         />
         <Request changeMenuOpened={changeMenuOpened} />
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
