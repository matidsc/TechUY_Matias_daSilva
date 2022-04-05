import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const ItemDetail = ({ details }) => {
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
        <h2>US${details.precio}</h2>

        <div>
       
          <button><span>Añadir al carrito</span><AiOutlineShoppingCart size={30} className="buttonCart"/></button>
          <button>
            <Link to={`/${details.categoria}`}>Seguir viendo</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemDetail;
