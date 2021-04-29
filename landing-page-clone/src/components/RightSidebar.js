import SlideButton from "../components/SlideButton";

function RightSidebar() {
   const languages = ["en", "ua", "ru"];

   return (
      <div id="right-sidebar" className="sidebar">
         <ul className="buttons-container">
            {languages.map((language, index) => {
               return (
                  <li>
                     <SlideButton
                        key={index}
                        text={language}
                        weight={index !== 0 ? "thin" : "default"}
                     />
                  </li>
               );
            })}
         </ul>
         <div>NAVIGATION</div>
         <div className="start-project-container">
            <SlideButton text="Start Project" />
         </div>
      </div>
   );
}

export default RightSidebar;
