import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import YellowButton from "../components/YellowButton";
import PulseButton from "../components/PulseButton";
import Animations from "../animation";
import { useEffect } from "react";

function PageLayout({
   firstHeader,
   secondHeader,
   description,
   btnText,
   display = "light",
   changeRequestOpened,
}) {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <div className={`page-default ${display}`}>
         <motion.div
            className="heading"
            ref={ref}
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75 }}
         >
            <h2>{firstHeader}</h2>
            <h2>{secondHeader}</h2>
         </motion.div>
         <motion.h5
            className="description"
            ref={ref}
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75, delay: 0.25 }}
         >
            {description}
         </motion.h5>
         <motion.div
            className="yellow-btn-container"
            ref={ref}
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate={controls}
            transition={{ duration: 0.75, delay: 0.75 }}
         >
            <YellowButton
               text={btnText}
               changeRequestOpened={changeRequestOpened}
            />
         </motion.div>
         <PulseButton />
      </div>
   );
}

export default PageLayout;
