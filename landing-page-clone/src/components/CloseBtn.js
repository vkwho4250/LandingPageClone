function CloseBtn({ changeMenuOpened }) {
   return (
      <div onClick={changeMenuOpened} className="close-btn">
         <div className="x-box">
            <div className="x-line"></div>
            <div className="x-line"></div>
         </div>
      </div>
   );
}

export default CloseBtn;
