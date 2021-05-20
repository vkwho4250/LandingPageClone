import ProjectPanel from "../components/ProjectPanel";
import { useState } from "react";

function Projects({ changeDarkMode }) {
   const projects = [
      {
         client: "ABC Group",
         description: "Corporate Site for ABC",
         letter: "A",
         img: "abc-project.png",
      },
      {
         client: "DEF Design",
         description: "Designer Site for DGF",
         letter: "D",
         img: "def-project.png",
      },
      {
         client: "GHI Tracking",
         description: "Tracking and Delivery Website",
         letter: "G",
         img: "ghi-project.png",
      },
      {
         client: "JKL Inc.",
         description: "Data Visualization Software and Services",
         letter: "J",
         img: "jkl-project.png",
      },
      {
         client: "MNO Eatery",
         description: "Online Ordering Website for Restaurant ",
         letter: "M",
         img: "mno-project.png",
      },
   ];

   const [hoverPanel, setHoverPanel] = useState("");

   function whichPanel(e) {
      if (e.type === "mouseleave") {
         setHoverPanel("");
      } else {
         setHoverPanel(e.currentTarget.id);
      }
   }

   return (
      <section id="projects-page" className="page-view dark">
         <div className="main-container">
            <div className="panel-display">
               {projects.map((project, index) => {
                  return (
                     <ProjectPanel
                        key={index}
                        index={index}
                        project={project}
                        whichPanel={whichPanel}
                        hoverPanel={hoverPanel}
                        changeDarkMode={changeDarkMode}
                     />
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export default Projects;