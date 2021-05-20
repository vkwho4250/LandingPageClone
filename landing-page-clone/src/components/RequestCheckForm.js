import RequestOption from "./RequestOption";

function RequestCheckForm({
   title,
   firstSet,
   secondSet,
   updateRequestDetails,
}) {
   return (
      <div id="request-check-form">
         <h1>{title}</h1>
         <div className="option-container">
            <div className="option-column">
               {firstSet.map((item, index) => {
                  return (
                     <RequestOption
                        item={item}
                        key={index}
                        updateRequestDetails={updateRequestDetails}
                     />
                  );
               })}
            </div>
            <div className="option-column">
               {secondSet.map((item, index) => {
                  return (
                     <RequestOption
                        item={item}
                        key={index}
                        updateRequestDetails={updateRequestDetails}
                     />
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default RequestCheckForm;
