import YellowButton from "../components/YellowButton";
import PulseButton from "../components/PulseButton";

function PageLayout({
   firstHeader,
   secondHeader,
   description,
   btnText,
   display = "light",
}) {
   return (
      <div className={`page-default ${display}`}>
         <div className="heading">
            <h2>{firstHeader}</h2>
            <h2>{secondHeader}</h2>
         </div>
         <h5 className="description">{description}</h5>
         <YellowButton text={btnText} />
         <PulseButton />
      </div>
   );
}

export default PageLayout;
