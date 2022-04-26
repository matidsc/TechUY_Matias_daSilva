import React, { useState } from "react";
import "../styles/itemCount.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const addToCart = () => {
    onAdd(count);
  };
  const deleteOne = () => {
    count > initial && setCount(count - 1);
  };
  const addOne = () => {
    stock > count && setCount(count + 1);
  };
  return (
    <div className="itemCountWrapper">
      {stock > 0 && (
        <>
          <button className="setCantItemsbtn" onClick={deleteOne}>
            -
          </button>
          <p>{count}</p>
          <button className="setCantItemsbtn" onClick={addOne}>
            +
          </button>
        </>
      ) }
      <button
        className="addToCartbtn"
        onClick={addToCart}
        disabled={stock > 0 ? false : true}
      >
        <AiOutlineShoppingCart size={18} className="buttonCart" />

        {stock > 0 ? "Añadir al carrito" : "Sin stock"}
      </button>
    </div>
  );
};

export default ItemCount;
