import { motion } from "framer-motion";
import { useState } from "react";

function SlideButton({
   text,
   direction = "right",
   weight = "default",
   changeItemHovered,
   itemHovered,
}) {
   return (
      <button
         id={`${text}-btn`}
         className="slide-btn"
         onMouseEnter={changeItemHovered}
         onMouseLeave={changeItemHovered}
      >
         <motion.div
            className={`text-container ${direction}`}
            initial={{ x: direction === "right" ? 0 : -25 }}
            animate={
               itemHovered === `${text}-btn`
                  ? { x: direction === "right" ? -25 : 0 }
                  : ""
            }
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
         >
            <h3 className={`${weight} ${direction}`}>{text}</h3>
            <h3 className={`secondary-color ${weight} ${direction}`}>{text}</h3>
         </motion.div>
      </button>
   );
}

export default SlideButton;
