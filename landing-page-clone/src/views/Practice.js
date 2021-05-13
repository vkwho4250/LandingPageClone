import PageLayout from "../components/PageLayout";
import ListItem from "../components/ListItem";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";
import Animations from "../animation";

function Practice() {
   const description =
      "We create premium web design, thoughtful and user-friendly interfaces that solve business problems";

   const leftList = ["UI Design", "UX Analytics", "Prototyping"];
   const rightList = ["Web Developement", "3D Modeling", "Design Thinking"];

   return (
      <section id="practice-page" className="page-view">
         <div className="main-container practice">
            <SlidingText firstSection="UI/UX" secondSection="Design" />
            <SlidingText firstSection="UI/UX" secondSection="Design" />
            <PageLayout
               firstHeader="What"
               secondHeader="We Do"
               description={description}
               btnText="Start Project"
            />
            <motion.div
               className="page-right"
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate="endingXY"
               transition={{ duration: 0.75, delay: 0.5 }}
            >
               <div className="list-container">
                  <ul className="left-column">
                     {leftList.map((service, index) => {
                        return (
                           <ListItem key={index} index={index} item={service} />
                        );
                     })}
                  </ul>
                  <ul className="right-column">
                     {rightList.map((service, index) => {
                        return (
                           <ListItem
                              key={index}
                              index={index + leftList.length}
                              item={service}
                           />
                        );
                     })}
                  </ul>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

export default Practice;
