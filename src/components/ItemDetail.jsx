import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ItemCount from "./ItemCount";
import { contexto } from "../context/context";
const ItemDetail = ({ details }) => {
  const [itemCount, setItemCount] = useState();
  const { addItem } = useContext(contexto);

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
        <p>{details.descripcion}</p>
        <h2>{`US$${details.precio}`}</h2>

        <div className="itemDetailInteraction">
          {itemCount > 0 ? (
            <Link to={"/cart"} className=" finalizarComprabtn">
              <motion.button
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <span>Finalizar compra</span>
                <AiOutlineShoppingCart size={30} className="buttonCart" />
              </motion.button>
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} stock={details.stock} initial={1} />
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
