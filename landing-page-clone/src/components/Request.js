import CloseBtn from "./CloseBtn";
import RequestNumber from "./RequestNumber";
import InputForm from "./InputForm";
import RequestCheckForm from "./RequestCheckForm";
import { motion } from "framer-motion";

function Request({ changeRequestOpened, requestOpened, updateRequestDetails }) {
   const options = [
      {
         title: "Web & App Development",
         items: [
            "E-commerce",
            "Landing Page",
            "New portal",
            "UI & UX Design",
            "Corporate website",
            "Comprehensive solutions",
         ],
      },
      {
         title: "Branding",
         items: [
            "Naming",
            "Logo Design",
            "Corporate identity",
            "Advertising design",
            "Brand book",
         ],
      },
      {
         title: "Internet Marketing",
         items: [
            "Search engine optimatization",
            "PPC Advertising",
            "Social Media Marketing",
            "Link Building",
            "E-mail",
         ],
      },
   ];

   function splitHalf(items) {
      const half = Math.ceil(items.length / 2);
      const firstSet = items.slice(0, half);
      const secondSet = items.slice(half, items.length);

      return [firstSet, secondSet];
   }

   return (
      <motion.div
         id="request-page"
         initial={{ opacity: 0 }}
         animate={
            requestOpened
               ? { opacity: 1, zIndex: 99 }
               : { opacity: 0, zIndex: -1 }
         }
         transition={{ duration: 1 }}
      >
         <div className="request-form">
            <CloseBtn purpose={changeRequestOpened} />
            <div className="request-call">
               <h1>Call Us</h1>
               <div>
                  <RequestNumber number="+1 (123) 456-4567" />
                  <RequestNumber number="+1 (123) 456-5678" />
               </div>
               <h1>Or leave a request</h1>
            </div>
            <div className="form-container">
               <form className="fixed-form">
                  {options.map((option, index) => {
                     return (
                        <RequestCheckForm
                           key={index}
                           title={option.title}
                           firstSet={splitHalf(option.items)[0]}
                           secondSet={splitHalf(option.items)[1]}
                           updateRequestDetails={updateRequestDetails}
                        />
                     );
                  })}
               </form>
               <InputForm />
            </div>
         </div>
      </motion.div>
   );
}
export default Request;
