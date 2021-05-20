import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Animations from "../animation";
import PageLayout from "../components/PageLayout";
import ListItem from "../components/ListItem";
import SlidingText from "../components/SlidingText";

function Services({ changeRequestOpened, changeDarkMode }) {
   const description =
      "We are a full cycle agency, provide a full range of services to represent your business in a digital environment.";

   const leftList = ["Branding", "Creative Concepts", "Analytics", "Strategy"];
   const rightList = [
      "Experiments",
      "Research & Development",
      "Business Consulting",
      "SEO, SMM, PCC",
   ];

   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         changeDarkMode(false);
      } else {
         controls.start("initialX");
      }
   }, [controls, inView]);

   return (
      <section id="services-page" className="page-view">
         <div className="main-container">
            <SlidingText firstSection="Our" secondSection="Expertise" />
            <SlidingText firstSection="Our" secondSection="Expertise" />
            <PageLayout
               firstHeader="Our"
               secondHeader="Competencies"
               description={description}
               btnText="Start Project"
               changeRequestOpened={changeRequestOpened}
            />
            <motion.div
               className="page-right"
               ref={ref}
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate={controls}
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

export default Services;
