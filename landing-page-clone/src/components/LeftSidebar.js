import SlideButton from "../components/SlideButton";
import MenuBtn from "../components/MenuBtn";
import { ReactComponent as Logo } from "../assets/logo.svg";

function LeftSidebar({
   changeItemHovered,
   itemHovered,
   changeMenuOpened,
   darkMode,
}) {
   const socials = ["FI", "FB", "IN", "BE", "DR"];

   return (
      <div
         id="left-sidebar"
         className={`sidebar ${darkMode ? "dark-mode" : ""}`}
      >
         <Logo id="logo" />
         <MenuBtn changeMenuOpened={changeMenuOpened} />

         <ul className="buttons-container">
            {socials.map((social, index) => {
               return (
                  <li key={index}>
                     <SlideButton
                        text={social}
                        direction="left"
                        changeItemHovered={changeItemHovered}
                        itemHovered={itemHovered}
                        darkMode={darkMode}
                     />
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default LeftSidebar;
