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

import { useState } from "react";

function App() {
   const [itemHovered, setItemHovered] = useState("");

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
         />
         <RightSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
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
