import { useState } from "react";
import YellowButton from "../components/YellowButton";

function Form() {
   const [inFocus, setInFocus] = useState("");

   const changeFocus = (e) => {
      setInFocus(e.target["id"]);
   };

   return (
      <form id="contact-form">
         <div className={inFocus === "name" ? "active" : ""}>
            <label htmlFor="name">Name</label>
            <input
               id="name"
               type="text"
               placeholder="Name*"
               name="name"
               required
               onClick={changeFocus}
            />
         </div>
         <div className={inFocus === "email" ? "active" : ""}>
            <label htmlFor="email">Email</label>
            <input
               id="email"
               type="email"
               placeholder="Email*"
               name="email"
               required
               onClick={changeFocus}
            />
         </div>
         <div className={inFocus === "message-theme" ? "active" : ""}>
            <label htmlFor="message-theme">Message Theme</label>
            <input
               id="message-theme"
               type="text"
               placeholder="Message theme"
               onClick={changeFocus}
            />
         </div>
         <div className={inFocus === "message" ? "active" : ""}>
            <label htmlFor="message">Message</label>
            <textarea
               id="message"
               rows="2"
               placeholder="How can we help you?"
               onClick={changeFocus}
            />
         </div>
         <YellowButton text="Send" />
      </form>
   );
}

export default Form;
