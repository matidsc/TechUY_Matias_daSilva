import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { contexto } from "../context/context";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const ItemDetail = ({ details }) => {
  const [itemCount, setItemCount] = useState();
  const { addItem, getCantInCart, isInCart } = useContext(contexto);
  console.log(isInCart(details.id))
  const onAdd = (count) => {
    setItemCount(count);
    addItem(details, count);
  };

  return (
    
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.6 }}
      className="itemDetail"
    >
      <img src={details.pictureURL}></img>
      <div className="itemDetailInfo">
        <h1>{details.modelo}</h1>
        <div className="priceWrapper">
          <h2>{`US$${details.precio}`}</h2>
          <span style={{display:isInCart(details.id)?"inline":"none"}}  ><AiOutlineShoppingCart/>Producto en el carrito</span>
        </div>
        <p>{details.descripcion}</p>
        <div className="itemDetailInteraction">
          {itemCount > 0 ? (
            <Link to={"/cart"} className=" finalizarComprabtn">
              <motion.button
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <span>Finalizar compra</span>
              </motion.button>
            </Link>
          ) : (
            <ItemCount
              onAdd={onAdd}
              stock={details.stock - getCantInCart(details.id)}
              initial={1}
            />
          )}

          <Link to={`/${details.categoria}`} className="seguirViendoBtn">
            <button>Seguir viendo</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemDetail;
