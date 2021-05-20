import { motion } from "framer-motion";
import Animations from "../animation";
import { useState } from "react";

function PageNavBtn({
   page,
   index,
   darkMode,
   currentSection,
   changeCurrentSection,
}) {
   const [onHover, setOnHover] = useState(false);

   function changeOnHover(e) {
      if (e.type === "mouseenter") {
         setOnHover(true);
      } else {
         setOnHover(false);
      }
   }

   function updateCurrentSection() {
      changeCurrentSection(`${page}-page`);
   }

   return (
      <a
         href={`#${page}-page`}
         id={`${page}-btn`}
         className={`page-btn ${darkMode ? "dark-mode" : ""}`}
         onMouseEnter={changeOnHover}
         onMouseLeave={changeOnHover}
         onClick={updateCurrentSection}
      >
         <motion.div
            className="page-num-container"
            variants={Animations.collapse}
            animate={
               onHover || currentSection === `${page}-page` ? "open" : "close"
            }
         >
            <h4>{`0${index + 1}`}</h4>
         </motion.div>

         <motion.div
            className={`circle ${
               onHover || currentSection === `${page}-page` ? "yellow" : ""
            }`}
         ></motion.div>
         <motion.div
            className={index !== 6 ? "line" : ""}
            variants={Animations.collapse}
            animate={
               onHover || currentSection === `${page}-page` ? "open" : "close"
            }
         ></motion.div>
      </a>
   );
}

export default PageNavBtn;
