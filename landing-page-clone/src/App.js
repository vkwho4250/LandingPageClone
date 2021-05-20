import "./styles/css/styles.css";
import Main from "./views/Main/Main";
import Submission from "./views/Submission";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";

function App() {
   // const [menuOpened, setMenuOpened] = useState(false);
   // const [requestOpened, setRequestOpened] = useState(false);
   // const [darkMode, setDarkMode] = useState(false);
   const [requestDetails, setRequestDetails] = useState([]);
   const [contactDetails, setContactDetails] = useState("");

   function updateContactDetails(details) {
      setContactDetails(details);
   }

   function updateRequestDetails(item) {
      if (requestDetails.includes(item)) {
         setRequestDetails(requestDetails.filter((detail) => detail !== item));
      } else {
         setRequestDetails([...requestDetails, item]);
      }
   }

   // function changeMenuOpened() {
   //    setMenuOpened(!menuOpened);
   // }

   // function changeRequestOpened() {
   //    setRequestOpened(!requestOpened);
   // }

   return (
      <Router>
         <Switch>
            <Route path="/submission">
               <Submission />
            </Route>
            <Route path="/">
               <Main
                  updateRequestDetails={updateRequestDetails}
                  updateContactDetails={updateContactDetails}
               />
            </Route>
         </Switch>
         {/* <LeftSidebar changeMenuOpened={changeMenuOpened} darkMode={darkMode} />
         <RightSidebar
            changeRequestOpened={changeRequestOpened}
            darkMode={darkMode}
         />
         <Menu changeMenuOpened={changeMenuOpened} menuOpened={menuOpened} />
         <Request
            changeRequestOpened={changeRequestOpened}
            requestOpened={requestOpened}
            updateRequestDetails={updateRequestDetails}
         />
         <Home />
         <Practice />
         <Awards />
         <Projects />
         <Services />
         <About />
         <Contact updateContactDetails={updateContactDetails} /> */}
      </Router>
   );
}

export default App;
