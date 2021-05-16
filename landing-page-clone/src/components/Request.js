import CloseBtn from "./CloseBtn";
import RequestNumber from "./RequestNumber";
import Form from "./Form";
import RequestCheckForm from "./RequestCheckForm";

function Request({ changeMenuOpened }) {
   return (
      <div id="request-page">
         <div className="request-form">
            <CloseBtn changeMenuOpened={changeMenuOpened} />
            <div className="request-call">
               <h1>Call Us</h1>
               <div>
                  <RequestNumber number="+1 (123) 456-4567" />
                  <RequestNumber number="+1 (123) 456-5678" />
               </div>
               <h1>Or leave a request</h1>
            </div>
            <div className="form-container">
               <RequestCheckForm />
               <Form />
            </div>
         </div>
      </div>
   );
}
export default Request;
