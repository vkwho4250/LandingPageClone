import { motion } from "framer-motion";
import Animations from "../animation";

function MenuPageNav({ page, index, changeItemHovered, itemHovered }) {
   return (
      <button
         id={`${page.link}-menu-btn`}
         className="menu-page-nav"
         onMouseEnter={changeItemHovered}
         onMouseLeave={changeItemHovered}
      >
         <motion.h2
            variant={Animations.movement}
            animate={
               itemHovered === `${page.link}-menu-btn`
                  ? { x: "5%", y: 0, color: "rgb(255,255,255)" }
                  : "endingXY"
            }
            transition={{ duration: 0.2 }}
         >
            {page.text}
         </motion.h2>
         <motion.h3
            animate={
               itemHovered === `${page.link}-menu-btn`
                  ? { x: "100%", y: 0, scale: -1 }
                  : { x: 0, y: 0, scale: -1 }
            }
         >{`0${index + 1}`}</motion.h3>
         <motion.div
            className="bottom-line"
            variant={Animations.movement}
            animate={
               itemHovered === `${page.link}-menu-btn`
                  ? { x: "275%", y: 0, opacity: 1, width: "15%" }
                  : { x: 0, y: 0, opacity: 0, width: "20%" }
            }
         ></motion.div>
      </button>
   );
}

export default MenuPageNav;
