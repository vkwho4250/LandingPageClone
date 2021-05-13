import { motion } from "framer-motion";
import Animations from "../animation";

function PageNavBtn({ page, index, changeItemHovered, itemHovered }) {
   return (
      <a
         href={`#${page}-page`}
         id={`${page}-btn`}
         className="page-btn"
         onMouseEnter={changeItemHovered}
         onMouseLeave={changeItemHovered}
      >
         <motion.div
            className="page-num-container"
            variants={Animations.collapse}
            animate={itemHovered === `${page}-btn` ? "open" : "close"}
         >
            <h4>{`0${index + 1}`}</h4>
         </motion.div>

         <motion.div
            className={`circle ${
               itemHovered === `${page}-btn` ? "yellow" : ""
            }`}
         ></motion.div>
         <motion.div
            className={index !== 6 ? "line" : ""}
            variants={Animations.collapse}
            animate={itemHovered === `${page}-btn` ? "open" : "close"}
         ></motion.div>
      </a>
   );
}

export default PageNavBtn;
