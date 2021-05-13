import { motion } from "framer-motion";

function MenuBtn() {
   const menuText = "menu".split();

   return (
      <button id="menu-btn">
         <div>
            {menuText.map((letter, index) => {
               return (
                  <motion.h1
                     key={index}
                     initial={{ y: -40 }}
                     animate={{ y: 40 }}
                     transition={{ duration: 5 }}
                  >
                     {letter}
                  </motion.h1>
               );
            })}
         </div>
      </button>
   );
}

export default MenuBtn;
