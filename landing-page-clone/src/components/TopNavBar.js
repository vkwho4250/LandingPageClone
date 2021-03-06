import { ReactComponent as Logo } from "../assets/logo.svg";

function TopNavBar({ changeMenuOpened }) {
   return (
      <nav id="top-nav-bar">
         <Logo />
         <button onClick={changeMenuOpened}>
            <span></span>
            <span></span>
            <span></span>
         </button>
      </nav>
   );
}

export default TopNavBar;
