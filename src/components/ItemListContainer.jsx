import React from "react";
import "../styles/itemList.scss";
function ItemListContainer({ greeting }) {

 /*<section className="itemListContainer">
    
      <div className="itemList">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </section>*/
  return (
    <section className="itemListContainer">
    
    <h1>{greeting}</h1>
    </section>
    
  );
}

export default ItemListContainer;
