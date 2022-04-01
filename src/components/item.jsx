import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Item = ({producto}) => {

 
  return (
    <motion.div className='item'
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{delay:0.5}}
    >
        <div className='infoItem'>
        <h1>{producto.modelo}</h1>
        <img src={producto.pictureURL}></img>
        <p>US${producto.precio}</p>

        </div>
        <button><Link to={`/${producto.categoria}/${producto.id}`}>Más detalles</Link></button>

    </motion.div>
  )
}

export default Item