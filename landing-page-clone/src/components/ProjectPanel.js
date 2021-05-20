import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Animations from "../animation";

function ProjectPanel({
   index,
   project,
   whichPanel,
   hoverPanel,
   changeDarkMode,
}) {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeDarkMode(true);
      } else {
         controls.start("initialY");
      }
   }, [controls, inView]);

   return (
      <motion.div
         id={`panel-${index + 1}`}
         className={`project-panel ${index !== 4 ? "border" : ""}`}
         onMouseEnter={whichPanel}
         onMouseLeave={whichPanel}
         ref={ref}
         variants={Animations.movement}
         initial="initialY"
         animate={controls}
         custom={500}
         transition={{ duration: 0.5, delay: index * 0.2, ease: "linear" }}
      >
         <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/assets/projects/${project.img}`}
         ></img>
         <div className="project-details">
            <motion.h1
               variants={Animations.textSlide}
               initial="hidden"
               animate={
                  hoverPanel === `panel-${index + 1}` ? "active" : "hidden"
               }
               transition={{
                  duration: 0.5,
               }}
            >
               {project.letter}
            </motion.h1>
            <h2>{project.client}</h2>
            <motion.p
               variants={Animations.textSlide}
               initial="hidden"
               animate={
                  hoverPanel === `panel-${index + 1}` ? "active" : "hidden"
               }
               transition={{
                  duration: 0.5,
               }}
            >
               {project.description}
            </motion.p>
         </div>
      </motion.div>
   );
}

export default ProjectPanel;
