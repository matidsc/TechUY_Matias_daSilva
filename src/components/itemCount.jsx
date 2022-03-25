import React, { useState } from "react";
import "../styles/itemCount.scss";
const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);
  const addToCart = () => {
    onAdd(count);
  };
  return (
    <div className="itemCountWrapper">
      <button
        onClick={
          count > initial
            ? () => {
                setCount(count - 1);
              }
            : null
        }
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={
          stock > count
            ? () => {
                setCount(count + 1);
              }
            : null
        }
      >
        +
      </button>
      <button onClick={addToCart} disabled={stock > 0 ? false : true}>
        {stock > 0 ? "Añadir al carrito" : "Sin stock"}
      </button>
    </div>
  );
};

export default ItemCount;
