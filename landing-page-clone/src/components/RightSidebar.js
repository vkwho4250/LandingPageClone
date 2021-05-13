import SlideButton from "../components/SlideButton";
import PageNav from "../components/PageNav";

function RightSidebar({ changeItemHovered, itemHovered }) {
   const languages = ["en", "ua", "ru"];

   return (
      <div id="right-sidebar" className="sidebar">
         <ul className="buttons-container">
            {languages.map((language, index) => {
               return (
                  <li key={index}>
                     <SlideButton
                        text={language}
                        weight={index !== 0 ? "thin" : "default"}
                        changeItemHovered={changeItemHovered}
                        itemHovered={itemHovered}
                     />
                  </li>
               );
            })}
         </ul>
         <PageNav
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
         />
         <div className="start-project-container">
            <SlideButton
               text="Start Project"
               changeItemHovered={changeItemHovered}
               itemHovered={itemHovered}
            />
         </div>
      </div>
   );
}

export default RightSidebar;
