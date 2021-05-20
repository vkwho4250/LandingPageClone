import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import CloseBtn from "./CloseBtn";
import MenuPageNav from "./MenuPageNav";
import { motion } from "framer-motion";

function Menu({
   changeItemHovered,
   itemHovered,
   changeMenuOpened,
   menuOpened,
}) {
   const pages = [
      {
         link: "practice",
         text: "What We Do",
      },
      {
         link: "awards",
         text: "Awards",
      },
      {
         link: "projects",
         text: "Projects",
      },
      {
         link: "services",
         text: "Services",
      },
      {
         link: "about",
         text: "Who we are",
      },
      {
         link: "contact",
         text: "Contact Us",
      },
   ];

   return (
      <motion.div
         animate={menuOpened ? { x: 2000, y: 0 } : { x: 0, y: 0 }}
         transition={{ duration: 1, type: "spring", bounce: 0.1 }}
         id="menu"
      >
         <RightSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <LeftSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <CloseBtn purpose={changeMenuOpened} />
         <ul className="page-right">
            {pages.map((page, index) => {
               return (
                  <li key={index}>
                     <MenuPageNav
                        page={page}
                        index={index}
                        changeItemHovered={changeItemHovered}
                        itemHovered={itemHovered}
                     />
                  </li>
               );
            })}
         </ul>
      </motion.div>
   );
}

export default Menu;
