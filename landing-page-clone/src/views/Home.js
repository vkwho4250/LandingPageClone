function Home() {
   const panels = [...Array(5).keys()];

   return (
      <div id="Home" className="page-view">
         <div className="panel-container">
            <div className="title-container">
               <h1 className="title-clone">CLONE</h1>
               <h1 className="title-agency">AGENCY</h1>
            </div>
            <div className="panel-display home">
               {panels.map((key) => {
                  return (
                     <div
                        key={key}
                        className={`lift-panel ${key !== 4 ? "border" : ""}`}
                     ></div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default Home;
