import React from "react";
import "../styles/itemList.scss";
import ItemCount from "../components/itemCount";
const ItemListContainer=({ greeting })=> {

 /*<section className="itemListContainer">
    
      <div className="itemList">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </section>*/
    const onAdd=(count)=>{

      console.log(count)
    }
  return (
    <section className="itemListContainer">
      
      <h1>{greeting}</h1>
      <div className="itemList">
      <ItemCount stock={0} initial={0} onAdd={onAdd}/>
      <ItemCount stock={10} initial={0} onAdd={onAdd}/>
      <ItemCount stock={5} initial={0} onAdd={onAdd}/>
      </div>

    </section>
    
  );
}

export default ItemListContainer;
