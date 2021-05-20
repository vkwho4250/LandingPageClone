import SlideButton from "../components/SlideButton";
import PageNav from "../components/PageNav";

function RightSidebar({
   changeRequestOpened,
   changeItemHovered,
   itemHovered,
   darkMode,
   currentSection,
   changeCurrentSection,
}) {
   const languages = ["en", "ua", "ru"];

   function testing() {
      console.log("casdf");
   }

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
                        darkMode={darkMode}
                     />
                  </li>
               );
            })}
         </ul>
         <PageNav
            changeItemHovered={changeItemHovered}
            itemHovered={itemHovered}
            darkMode={darkMode}
            currentSection={currentSection}
            changeCurrentSection={changeCurrentSection}
         />
         <div className="start-project-container" onClick={changeRequestOpened}>
            <SlideButton
               text="Start Project"
               changeItemHovered={changeItemHovered}
               itemHovered={itemHovered}
               darkMode={darkMode}
            />
         </div>
      </div>
   );
}

export default RightSidebar;
