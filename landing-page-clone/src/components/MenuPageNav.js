function MenuPageNav({ page, index }) {
   return (
      <button className="menu-page-nav">
         <h2>{page.text}</h2>
         <h3>{`0${index + 1}`}</h3>
         <div className="bottom-line"></div>
      </button>
   );
}

export default MenuPageNav;
