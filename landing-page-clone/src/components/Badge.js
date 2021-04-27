function Badge({ text, color }) {
   return (
      <div style={{ background: color }} className="badge">
         <h3>
            W <span>.</span>
         </h3>
         <h4>{text}</h4>
      </div>
   );
}

export default Badge;
