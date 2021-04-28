import PageLayout from "../components/PageLayout";
import ListItem from "../components/ListItem";

function Practice() {
   const description =
      "We create premium web design, thoughtful and user-friendly interfaces that solve business problems";

   const leftList = ["UI Design", "UX Analytics", "Prototyping"];
   const rightList = ["Web Developement", "3D Modeling", "Design Thinking"];

   return (
      <div id="practice-page" className="page-view">
         <div className="main-container practice">
            <PageLayout
               firstHeader="What"
               secondHeader="We Do"
               description={description}
               btnText="Start Project"
            />
            <div className="page-right">
               <div className="list-container">
                  <ul className="left-column">
                     {leftList.map((service, index) => {
                        return <ListItem index={index} item={service} />;
                     })}
                  </ul>
                  <ul className="right-column">
                     {rightList.map((service, index) => {
                        return (
                           <ListItem
                              index={index + leftList.length}
                              item={service}
                           />
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Practice;
