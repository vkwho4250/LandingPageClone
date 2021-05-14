import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import CloseBtn from "./CloseBtn";
import MenuPageNav from "./MenuPageNav";

function Menu({ changeItemHovered, itemHovered }) {
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
      <div id="menu">
         <RightSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <LeftSidebar
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <CloseBtn />
         <ul className="page-right">
            {pages.map((page, index) => {
               return (
                  <li key={index}>
                     <MenuPageNav page={page} index={index} />
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default Menu;
