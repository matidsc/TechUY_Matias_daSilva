import React from 'react'
import { Link } from "react-router-dom";
import '../styles/backToMain.scss'
const BackToMain = ({mensaje, ruta, boton}) => {
  return (
    <div className="noHayItems">
    <h1>{mensaje}</h1> 
    <Link to={ruta}>
      <button>{boton}</button>
    </Link>
  </div>
  )
}

export default BackToMain