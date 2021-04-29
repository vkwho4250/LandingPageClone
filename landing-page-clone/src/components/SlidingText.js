function SlidingText({ firstSection, secondSection }) {
   return (
      <div className="sliding-text">
         <div className="carousel right">
            <div className="tier top-tier">
               <h1>{firstSection}</h1>
               <h1 className="text-outline">{secondSection}</h1>
            </div>
            <div className="tier top-tier">
               <h1>{firstSection}</h1>
               <h1 className="text-outline">{secondSection}</h1>
            </div>
         </div>

         <div className="carousel right">
            <div className="tier bottom-tier">
               <h1 className="text-outline">{firstSection}</h1>
               <h1>{secondSection}</h1>
            </div>
            <div className="tier bottom-tier">
               <h1 className="text-outline">{firstSection}</h1>
               <h1>{secondSection}</h1>
            </div>
         </div>
      </div>
   );
}

export default SlidingText;
