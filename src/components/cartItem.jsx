import React, { useState, useEffect, useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { contexto } from "../context/context";
const CartItem = ({
  id,
  stock,
  modelo,
  pictureURL,
  cantidad,
  precio,
  onDelete,
}) => {
  const [cartCantidad, setCartCantidad] = useState(cantidad);
  const { updateCantItem } = useContext(contexto);

  useEffect(() => {
    updateCantItem(id, cartCantidad);
  }, [cartCantidad]);

  const deleteOne = () => {
    cartCantidad > 1 && setCartCantidad(cartCantidad - 1);
  };
  const addOne = () => {
    stock > cartCantidad && setCartCantidad(cartCantidad + 1);
  };
  return (
    <>
    <div className="cartItem">
      <img src={pictureURL} />
      <span className="modeloItem">{modelo}</span>
      <div className="setCantWrapper">
        <button onClick={deleteOne} className="setCantItemsbtn">
          -
        </button>
        <span>{cartCantidad}</span>
        <button onClick={addOne} className="setCantItemsbtn">
          +
        </button>
      </div>
      <span className="precioItem">{`US$${precio}`}</span>
    
      <span className="precioTotalItem"><label>| Total: </label> {`US$${precio*cartCantidad}`}</span>

      <button
        title="Eliminar producto"
        className="deleteProduct"
        onClick={() => onDelete(id)}
      >
        <AiTwotoneDelete color="#F44336" size={30} />
      </button>

    </div>
          <span className="endLineProdcuto"></span>
</>
  );
};

export default CartItem;
