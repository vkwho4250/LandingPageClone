function SlideButton({
   text,
   direction = "right",
   action,
   weight = "default",
}) {
   return (
      <button className="slide-btn">
         <div className={`text-container ${direction}`}>
            <h3 className={`${weight} ${direction}`}>{text}</h3>
            <h3 className={`yellow ${weight} ${direction}`}>{text}</h3>
         </div>
      </button>
   );
}

export default SlideButton;
