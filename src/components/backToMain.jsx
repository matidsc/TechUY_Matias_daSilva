import React from 'react'
import { Link } from "react-router-dom";
import '../styles/backToMain.scss'
import AnimatedPage from '../components/animatedPage' 
const BackToMain = ({mensaje, ruta, boton}) => {
  return (
    <AnimatedPage>

    <div className="noHayItems">
    <h1>{mensaje}</h1> 
    <Link to={ruta}>
      <button>{boton}</button>
    </Link>
  </div>
  </AnimatedPage>

  )
}

export default BackToMain