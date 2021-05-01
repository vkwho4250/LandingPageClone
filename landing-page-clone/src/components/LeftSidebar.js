import SlideButton from "../components/SlideButton";
import { ReactComponent as Logo } from "../assets/logo.svg";

function LeftSidebar() {
   const socials = ["FI", "FB", "IN", "BE", "DR"];

   return (
      <div id="left-sidebar" className="sidebar">
         <Logo className="logo" />
         <div>MENU</div>

         <ul className="buttons-container">
            {socials.map((social, index) => {
               return (
                  <li key={index}>
                     <SlideButton text={social} direction="left" />
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default LeftSidebar;
