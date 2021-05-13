import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";
import Animations from "../animation";

function Awards() {
   const description =
      "Keeping abreast of the latest trends in graphic and web design is our primary concern. Confirmation of this is our rewards.";

   return (
      <section id="awards-page" className="page-view dark">
         <div className="main-container">
            <PageLayout
               firstHeader="Our"
               secondHeader="Awards"
               description={description}
               btnText="Start Project"
               display="dark"
            />
            <motion.ul
               className="awards-list-container"
               variants={Animations.movement}
               initial="initialX"
               custom={-20}
               animate="endingXY"
               transition={{ duration: 0.75, delay: 0.5 }}
            >
               <li className="award">
                  <h1>
                     A<span>www</span>ards
                  </h1>
                  <div>
                     <p className="description">Honorable Mention x 0</p>
                     <p className="description">Mobile Site x 0</p>
                  </div>
               </li>
               <li className="award">
                  <h1>
                     CSS<span>W</span>INNER
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>
                     Web <span>Guru</span> Awards
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>Boostlizer</h1>
                  <p className="description">Site of the day x 0</p>
               </li>
               <li className="award">
                  <h1>
                     <span>CSS</span>Reel
                  </h1>
                  <p className="description">Site of the day x 0</p>
               </li>
            </motion.ul>
         </div>
      </section>
   );
}

export default Awards;
