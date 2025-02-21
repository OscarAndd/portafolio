import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CHomeCarousel from './CHomeCarousel';
export default function CHome() {
  const [randomNumber, setRandomNumber] = useState(0);
  const imagenesPrincipal=["imagenPrincipal/principal1.png","imagenPrincipal/principal2.png",
    "imagenPrincipal/principal3.png","imagenPrincipal/principal4.png"]
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const number = Math.floor(Math.random() * 4) ; // Genera un número aleatorio entre 1 y 100
    setRandomNumber(number);
    console.log(number);
  }, []); 
 
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
      
      }, []);

  return (
    <div className='container-fluid row align-items-center mt-md-1 mt-lg-0 mx-0 px-0 ocultar zoom-in flex-grow-1 d-flex'>
      <p className='text-center mt-2 fst-italic opacity-50 d-md-none '>INICIO</p>
      <div className='justify-content-center col-12 col-md-7 px-4'>
        <h1 className='text-center mt-2 btn-darkmode'>¡Hola!</h1>
        <h3 className='mt-3 text-justify'><br />
          Soy Oscar Andres Alvarez, desarrollador de software en constante aprendizaje,
          me apasiona explorar nuevas tecnologías y metodologías para mejorar mis habilidades
          y ofrecer soluciones de vanguardia. Soy colaborativo y orientado a resultados, comprometido con la creación de
          software de alta calidad.
        </h3>
        <h2 className='my-3'><br />Bienvenido a mi sitio web</h2>
        <h2 className='mb-5 d-none d-md-block '><br />Te invito a saber mas sobre mí <Link to="/acerca"> <i className="bi bi-arrow-right-square"></i></Link></h2>

      </div>
      <div className=' mt-md-1 mt-lg-0 pe-4 col-12 col-md-5' >
      
        
        <img className='img-fluid rounded' src={imagenesPrincipal[randomNumber]}  alt='imagen principal' />
        
        <div className='mb-3 d-md-none d-flex flex-row-reverse flex-wrap flex-md-nowrap align-items-center mt-2 mb-4'>
          <a onClick={scrollToTop}  className='mx-auto d-xl-none'> <i className="bi bi-arrow-up-circle fs-2 text-primary subir"></i></a>
          <h2 className=' flex-grow-1 mb-0 w-100 '>Te invito a saber mas sobre mí <Link to="/acerca"> <i className="bi bi-arrow-right-square"></i></Link></h2>
        </div>
      </div>




    </div>
  )
}
