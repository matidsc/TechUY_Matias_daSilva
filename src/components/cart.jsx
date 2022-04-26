import React, { useContext} from "react";
import { contexto } from "../context/context";
import { Link } from "react-router-dom";
import "../styles/cart.scss";
import CartItem from "./cartItem";
const Cart = () => {
  const { items, getPrecioTotal,deleteItem} = useContext(contexto);

  return (
    <>
      {items.length > 0 ? (
        <div className="cartWrapper">
          <h1>Checkout</h1>
          {items.map((item) => {
            return (
              <CartItem id={item.id} stock={item.stock}modelo={item.modelo} pictureURL={item.pictureURL} cantidad={item.cantidad} precio={item.precio} onDelete={deleteItem}/>
            );
          })}
          <span className="endLine"></span>
          <div className="precioTotal">{`Total: US$${getPrecioTotal()}`}</div>
        </div>
      ) : (
        <div className="noHayItems">
          <h1>El carrito se encuentra vacío</h1> 
          <Link to={`/`}>
            <button>Sigue buscando productos</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
