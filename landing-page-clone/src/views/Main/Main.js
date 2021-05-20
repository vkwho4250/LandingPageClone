import { useState } from "react";

import Home from "./sections/Home";
import Practice from "./sections/Practice";
import Awards from "./sections/Awards";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import RightSidebar from "../../components/RightSidebar";
import LeftSidebar from "../../components/LeftSidebar";
import Menu from "../../components/Menu";
import Request from "../../components/Request";

function Main({ updateRequestDetails, updateContactDetails }) {
   const [menuOpened, setMenuOpened] = useState(false);
   const [requestOpened, setRequestOpened] = useState(false);
   const [darkMode, setDarkMode] = useState(false);

   function changeMenuOpened() {
      setMenuOpened(!menuOpened);
   }

   function changeRequestOpened() {
      setRequestOpened(!requestOpened);
   }

   function changeDarkMode(action) {
      setDarkMode(action);
      console.log(action);
   }

   return (
      <div id="main-view">
         <LeftSidebar changeMenuOpened={changeMenuOpened} darkMode={darkMode} />
         <RightSidebar
            changeRequestOpened={changeRequestOpened}
            darkMode={darkMode}
         />
         <Menu changeMenuOpened={changeMenuOpened} menuOpened={menuOpened} />
         <Request
            changeRequestOpened={changeRequestOpened}
            requestOpened={requestOpened}
            updateRequestDetails={updateRequestDetails}
         />
         <Home />
         <Practice
            changeRequestOpened={changeRequestOpened}
            changeDarkMode={changeDarkMode}
         />
         <Awards
            changeRequestOpened={changeRequestOpened}
            changeDarkMode={changeDarkMode}
         />
         <Projects changeDarkMode={changeDarkMode} />
         <Services
            changeRequestOpened={changeRequestOpened}
            changeDarkMode={changeDarkMode}
         />
         <About changeRequestOpened={changeRequestOpened} />
         <Contact
            updateContactDetails={updateContactDetails}
            changeRequestOpened={changeRequestOpened}
         />
      </div>
   );
}

export default Main;
