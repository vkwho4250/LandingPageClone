import PageLayout from "../components/PageLayout";
import ListItem from "../components/ListItem";
import SlidingText from "../components/SlidingText";

function Practice() {
   const description =
      "We create premium web design, thoughtful and user-friendly interfaces that solve business problems";

   const leftList = ["UI Design", "UX Analytics", "Prototyping"];
   const rightList = ["Web Developement", "3D Modeling", "Design Thinking"];

   return (
      <section id="practice-page" className="page-view">
         <div className="main-container practice">
            <SlidingText firstSection="UI/UX" secondSection="Design" />
            <SlidingText firstSection="UI/UX" secondSection="Design" />
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
      </section>
   );
}

export default Practice;
