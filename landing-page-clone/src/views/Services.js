import PageLayout from "../components/PageLayout";
import ListItem from "../components/ListItem";
import SlidingText from "../components/SlidingText";

function Services() {
   const description =
      "We are a full cycle agency, provide a full range of services to represent your business in a digital environment.";

   const leftList = ["Branding", "Creative Concepts", "Analytics", "Strategy"];
   const rightList = [
      "Experiments",
      "Research & Development",
      "Business Consulting",
      "SEO, SMM, PCC",
   ];

   return (
      <div id="practice-page" className="page-view">
         <div className="main-container practice">
            <SlidingText firstSection="Our" secondSection="Expertise" />
            <SlidingText firstSection="Our" secondSection="Expertise" />
            <PageLayout
               firstHeader="Our"
               secondHeader="Competencies"
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

export default Services;
