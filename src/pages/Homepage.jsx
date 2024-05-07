import React from 'react'
import Encabezado from '../components/Encabezado'
import foto from "../assets/imagenes/foto.jpg"
import { Link } from 'react-router-dom'

function Homepage() {

    
  return (
    <div >
        <img src={foto} alt='foto' width={"190px"} className='foto' />
        <Encabezado/>
        <h3>¿Quieres ver mi portfolio? tienes estás dos opciones: </h3>
        <div className='botones'>

        <a href='https://main--feg2dportfolio.netlify.app/' >
            <button className='botonpatata'>Juego 2D</button>
        </a>
            
        <Link to={"/proyectos"}>
        <button className='botonpatata' >
            Proyectos 
        </button>
        </Link>
        </div>
    </div>
  )
}

export default Homepage