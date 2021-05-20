import { motion } from "framer-motion";
import Animations from "../animation";
import { useState } from "react";

function PageNavBtn({ page, index, darkMode }) {
   const [onHover, setOnHover] = useState(false);

   function changeOnHover(e) {
      if (e.type === "mouseenter") {
         setOnHover(true);
      } else {
         setOnHover(false);
      }
   }

   return (
      <a
         href={`#${page}-page`}
         id={`${page}-btn`}
         className={`page-btn ${darkMode ? "dark-mode" : ""}`}
         onMouseEnter={changeOnHover}
         onMouseLeave={changeOnHover}
      >
         <motion.div
            className="page-num-container"
            variants={Animations.collapse}
            animate={onHover ? "open" : "close"}
         >
            <h4>{`0${index + 1}`}</h4>
         </motion.div>

         <motion.div
            className={`circle ${onHover ? "yellow" : ""}`}
         ></motion.div>
         <motion.div
            className={index !== 6 ? "line" : ""}
            variants={Animations.collapse}
            animate={onHover ? "open" : "close"}
         ></motion.div>
      </a>
   );
}

export default PageNavBtn;
