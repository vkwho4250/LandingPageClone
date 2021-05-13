import YellowButton from "../components/YellowButton";
import PulseButton from "../components/PulseButton";
import { motion } from "framer-motion";
import Animations from "../animation";

function PageLayout({
   firstHeader,
   secondHeader,
   description,
   btnText,
   display = "light",
}) {
   return (
      <div className={`page-default ${display}`}>
         <motion.div
            className="heading"
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate="endingXY"
            transition={{ duration: 0.75 }}
         >
            <h2>{firstHeader}</h2>
            <h2>{secondHeader}</h2>
         </motion.div>
         <motion.h5
            className="description"
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate="endingXY"
            transition={{ duration: 0.75, delay: 0.25 }}
         >
            {description}
         </motion.h5>
         <motion.div
            className="yellow-btn-container"
            variants={Animations.movement}
            initial="initialX"
            custom={-20}
            animate="endingXY"
            transition={{ duration: 0.75, delay: 0.75 }}
         >
            <YellowButton text={btnText} />
         </motion.div>
         <PulseButton />
      </div>
   );
}

export default PageLayout;
