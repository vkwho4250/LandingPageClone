import { ReactComponent as Triangle } from "../assets/triangle.svg";
import Badge from "../components/Badge";

function Home() {
   const panels = [...Array(5).keys()];

   return (
      <section id="home-page" className="page-view">
         <div className="panel-container">
            <div className="side-badges">
               <Badge text="Honors" color="#9BD4D7" />
               <Badge text="Mobile Award" color="#EE762D" />
            </div>
            <Triangle className="triangle" />
            <div className="mouse-scroll">
               <div className="scroll"></div>
            </div>

            <div className="title-container silhouette">
               <h1 className="title-clone">DESIGN</h1>
               <h1 className="title-agency">AGENCY</h1>
            </div>
            <div className="title-container">
               <h1 className="title-clone">DESIGN</h1>
               <h1 className="title-agency">AGENCY</h1>
               <div className="subheading">
                  <h4>Not for commercial use. Just front-end practice ^ - ^</h4>
                  <h4>
                     Reference Site:{" "}
                     <a href="https://evoxlab.com/#home" target="_blank">
                        EXOVLAB
                     </a>
                  </h4>
               </div>
            </div>

            <div className="panel-display home">
               {panels.map((key) => {
                  return (
                     <div
                        key={key}
                        className={`lift-panel ${key !== 4 ? "border" : ""}`}
                     ></div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

export default Home;
