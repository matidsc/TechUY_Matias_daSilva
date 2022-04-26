import React, { useState, useEffect,useContext } from "react";
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
  const {updateCantItem}=useContext(contexto)

  useEffect(() => {
    updateCantItem(id, cartCantidad);
  }, [cartCantidad]);

  return (
    <div className="cartItem">
      <img src={pictureURL} />
      <span className="modeloItem">{modelo}</span>
      <div>
        <button
          onClick={
            cartCantidad > 1
              ? () => {
                  setCartCantidad(cartCantidad - 1);

                }
              : null
          }
          className="setCantItemsbtn"
        >
          -
        </button>
        <p>{cartCantidad}</p>
        <button
          onClick={
            stock > cartCantidad
              ? () => {
                  setCartCantidad(cartCantidad + 1);
                }
              : null
          }
          className="setCantItemsbtn"
        >
          +
        </button>
      </div>
      <span className="precioItem">{`US$${precio}`}</span>
      <button
        title="Eliminar producto"
        className="deleteProduct"
        onClick={() => onDelete(id)}
      >
        <AiTwotoneDelete color="F44336" size={30} />
      </button>
    </div>
  );
};

export default CartItem;
