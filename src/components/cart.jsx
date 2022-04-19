import React, { useContext} from "react";
import { contexto } from "../context/context";
import { Link } from "react-router-dom";
import "../styles/cart.scss";
import{AiTwotoneDelete} from 'react-icons/ai'
const Cart = () => {
  const { items, getPrecioTotal,deleteItem } = useContext(contexto);

  const onDelete=()=>{
  }
  return (
    <>
      {items.length > 0 ? (
        <div className="cartWrapper">
          <h1>Checkout</h1>
          {items.map((item) => {
            return (
              <div className="cartItem">
                <img src={item.pictureURL} />
                <span className="modeloItem">{item.modelo}</span>
                <div>
                  <button className="setCantItemsbtn">-</button>
                  <p>{item.cantidad}</p>
                  <button className="setCantItemsbtn">+</button>
                </div>
                <span className="precioItem">{`US$${item.precio}`}</span>
                <button title="Eliminar producto" className="deleteProduct" onClick={()=>deleteItem(item.id)}>
                  <AiTwotoneDelete color="F44336" size={30}/>
                  </button>
              </div>
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
