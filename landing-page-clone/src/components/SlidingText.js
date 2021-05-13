import { motion } from "framer-motion";
import Animations from "../animation";

function SlidingText({ firstSection, secondSection }) {
   return (
      <div className="sliding-text">
         <div className="carousel right">
            <div
               className="tier top-tier"
               variants={Animations.movement}
               initial="slideAcross"
               custom={-2000}
               animate="endingXY"
               transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
               }}
            >
               <h1>{firstSection}</h1>
               <h1 className="text-outline">{secondSection}</h1>
            </div>
         </div>

         <div className="carousel right">
            <div className="tier bottom-tier">
               <h1 className="text-outline">{firstSection}</h1>
               <h1>{secondSection}</h1>
            </div>
            <div className="tier bottom-tier">
               <h1 className="text-outline">{firstSection}</h1>
               <h1>{secondSection}</h1>
            </div>
         </div>
      </div>
   );
}

export default SlidingText;
