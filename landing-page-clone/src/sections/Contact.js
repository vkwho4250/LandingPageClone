import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as FloatingMountains } from "../assets/floatMountains.svg";
import YellowButton from "../components/YellowButton";
import InputForm from "../components/InputForm";
import Animations from "../animation";

function Contact({ updateContactDetails, changeRequestOpened }) {
   const controls = useAnimation();
   const [ref, inView] = useInView();

   useEffect(() => {
      if (inView) {
         controls.start("endingXY");
         controls.start("visible");
      } else {
         controls.start("initialY");
         // controls.start("hidden");
      }
   }, [controls, inView]);

   return (
      <section id="contact-page" className="page-view">
         <div className="main-container contact">
            <header>
               <motion.div
                  className="container"
                  ref={ref}
                  variants={Animations.movement}
                  initial="initialY"
                  custom={20}
                  animate={controls}
                  transition={{ duration: 0.75, delay: 0.5 }}
               >
                  <h1>Contact Us</h1>
                  <h1>Contact Us</h1>
               </motion.div>
               <motion.div
                  className="floating-mountains"
                  ref={ref}
                  variants={Animations.movement}
                  initial="initialY"
                  custom={20}
                  animate={controls}
                  transition={{ duration: 0.75 }}
               >
                  <FloatingMountains />
               </motion.div>
               <motion.div
                  className="container"
                  ref={ref}
                  variants={Animations.fade}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <Triangle className="triangle" />
               </motion.div>
            </header>

            <div className="form-container">
               <motion.div
                  className="input-details"
                  ref={ref}
                  variants={Animations.movement}
                  initial="initialX"
                  custom={20}
                  animate={controls}
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <InputForm updateContactDetails={updateContactDetails} />
               </motion.div>
               <motion.div
                  className="fixed-form contact-details"
                  ref={ref}
                  variants={Animations.movement}
                  initial="initialX"
                  custom={20}
                  animate={controls}
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <h2>Conquer new peaks</h2>
                  <h2>Of Business</h2>
                  <h5 className="description">
                     Only a few steps are left before your success. Leave a
                     request. And we will help you with your project!
                  </h5>
                  <YellowButton
                     text="Start Project"
                     changeRequestOpened={changeRequestOpened}
                  />

                  <div className="contact-method-container">
                     <div className="contact-method">
                        <h3>Our Phone Number</h3>
                        <a href="#" className="contact-info">
                           +1 (123) 456-4567
                        </a>
                     </div>
                     <div className="contact-method">
                        <h3>Write to Us</h3>
                        <a href="#" className="contact-info">
                           clonexlab@gmail.com
                        </a>
                     </div>
                     <div className="contact-method">
                        <h3>Address</h3>
                        <p className="contact-info">123 Clone Street</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
