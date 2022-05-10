import React from 'react'
import '../styles/aboutPage.scss'
import AnimatedPage from '../components/animatedPage'
const AboutPage = () => {
  return (
    <AnimatedPage>
    <div className='aboutWrapper'>
        
        <div className="leftText">
            
            <h1>¿Quiénes somos?</h1>
        </div>
        <div className="rightText">

        <p>TechUY es una tienda uruguaya de hardware, especializados tanto en  componentes gaming como en componentes pensados para la oficina.
        Aseguramos nuestra calidad vendiendo las marcas más demandadas del mercado.</p> 

        </div>
    </div>
    </AnimatedPage>
  )
}

export default AboutPage