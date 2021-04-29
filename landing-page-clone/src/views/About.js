import PageLayout from "../components/PageLayout";

function About() {
   const description =
      "We are a mix of design, technology and marketing. Our projects are a combination of creativity, trends and traditions. Our mission is to accompany you on your way to conquering the peaks of business.";

   return (
      <section id="about-page" className="page-view">
         <div className="main-container">
            <PageLayout
               firstHeader="Something"
               secondHeader="About Us"
               description={description}
               btnText="Start Project"
            />
         </div>
      </section>
   );
}

export default About;
