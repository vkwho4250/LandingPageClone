import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as FloatingMountains } from "../assets/floatMountains.svg";
import YellowButton from "../components/YellowButton";
import Form from "../components/Form";
import { motion } from "framer-motion";
import Animations from "../animation";

function Contact() {
   return (
      <section id="contact-page" className="page-view">
         <div className="main-container contact">
            <header className="middle-piece">
               <motion.div
                  className="container"
                  variants={Animations.movement}
                  initial="initialY"
                  custom={20}
                  animate="endingXY"
                  transition={{ duration: 0.75, delay: 0.5 }}
               >
                  <h1>Contact Us</h1>
                  <h1>Contact Us</h1>
               </motion.div>
               <motion.div
                  className="floating-mountains"
                  variants={Animations.movement}
                  initial="initialY"
                  custom={20}
                  animate="endingXY"
                  transition={{ duration: 0.75 }}
               >
                  <FloatingMountains />
               </motion.div>
               <motion.div
                  className="container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <Triangle className="triangle" />
               </motion.div>
            </header>

            <div className="contact-content">
               <motion.div
                  className="contact-details"
                  variants={Animations.movement}
                  initial="initialX"
                  custom={20}
                  animate="endingXY"
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <h2>Conquer new peaks</h2>
                  <h2>Of Business</h2>
                  <h5 className="description">
                     Only a few steps are left before your success. Leave a
                     request. And we will help you with your project! Regards,
                     EVOXLAB Team.
                  </h5>
                  <YellowButton text="Start Project" />
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
               <motion.div
                  className="contact-details"
                  variants={Animations.movement}
                  initial="initialX"
                  custom={-20}
                  animate="endingXY"
                  transition={{ duration: 0.75, delay: 1 }}
               >
                  <Form />
               </motion.div>
            </div>
         </div>
      </section>
   );
}

export default Contact;
