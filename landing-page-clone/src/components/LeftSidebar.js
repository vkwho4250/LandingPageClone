import SlideButton from "../components/SlideButton";
import MenuBtn from "../components/MenuBtn";
import { ReactComponent as Logo } from "../assets/logo.svg";

function LeftSidebar({
   changeItemHovered,
   itemHovered,
   changeMenuOpened,
   menuOpened,
}) {
   const socials = ["FI", "FB", "IN", "BE", "DR"];

   return (
      <div id="left-sidebar" className="sidebar">
         <Logo className="logo" />
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
                     />
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default LeftSidebar;
