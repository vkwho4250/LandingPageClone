function YellowButton({ text }) {
   return (
      <button className="big-yellow-btn">
         <h6>{text}</h6>
         <div className="pulse"></div>
      </button>
   );
}

export default YellowButton;
