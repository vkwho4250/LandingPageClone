import { useEffect, useState } from "react";
import PageNavBtn from "./PageNavBtn";

function PageNav({ changeItemHovered, itemHovered }) {
   const pages = [
      "home",
      "practice",
      "awards",
      "projects",
      "services",
      "about",
      "contact",
   ];

   return (
      <div id="page-navigation">
         {pages.map((page, index) => {
            return (
               <PageNavBtn
                  key={index}
                  index={index}
                  page={page}
                  changeItemHovered={changeItemHovered}
                  itemHovered={itemHovered}
               />
            );
         })}
      </div>
   );
}

export default PageNav;
