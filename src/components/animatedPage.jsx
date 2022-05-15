import React from "react";
import { motion } from "framer-motion";


const animations={
    initial:{opacity:0,x:100},
    animate:{opacity:1,x:0},
    exit:{opacity:0, x:-100}
}
const AnimatedPage = ({ children }) => {
  return <motion.div style={{overflowY:"hidden", display:"flex",flexDirection:"column"}} transition={{duration:0.5}} variants={animations} initial="initial" animate="animate"exit="exit" >{children}</motion.div>;
};

export default AnimatedPage;
