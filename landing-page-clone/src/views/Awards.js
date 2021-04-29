import PageLayout from "../components/PageLayout";

function Awards() {
   const description =
      "Keeping abreast of the latest trends in graphic and web design is our primary concern. Confirmation of this is our rewards.";

   return (
      <section id="awards-page" className="page-view dark">
         <div className="main-container">
            <PageLayout
               firstHeader="Our"
               secondHeader="Awards"
               description={description}
               btnText="Start Project"
               display="dark"
            />
         </div>
      </section>
   );
}

export default Awards;
