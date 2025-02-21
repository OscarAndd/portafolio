import React from 'react'
import { Link } from 'react-router-dom'
export default function CAcerca() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='container-fluid row ocultar mx-0 px-0 slide-in-right flex-grow-1 d-flex'>
      <p className='text-center mt-4 fst-italic opacity-50 d-md-none ' >SOBRE MÍ</p>
      <h1 className='btn-darkmode'>¡Hola!</h1>
      <div className='col-12 col-md-6 px-md-4 px-lg-5'>
        <p className='fs-4  mb-0 text-justify '>
          <br />&emsp;Soy Oscar Andres Alvarez, Tecnólogo electrónico y apasionado desarrollador de software.
          Con experiencia en desarrollo web, aplicaciones móviles y aplicaciones de escritorio. <br /><br />
          Nací y crecí en la ciudad de Bogotá y desde pequeño me ha fascinado la tecnología y cómo puede transformar el mundo.
          Además de desarrollador soy un entusiasta de la inteligencia artificial, de crear mis propias aplicaciones,
          de la domótica, electronica y la robótica. Fuera del ámbito técnico, disfruto de viajar, practicar senderismo, leer y
          jugar ajedrez.<br /><br />
        </p>
      </div>
      <div className=' col-12 col-md-6 px-md-4 px-lg-5' >
        <p className='fs-4  mb-0 text-justify '>
          <br /> Soy una persona curiosa, organizada, con atención a los detalles, disfruto trabajar en equipo y colaborar en
          proyectos desafiantes que me permitan crecer tanto profesional como personalmente. Me encanta transformar ideas en
          soluciones tecnológicas innovadoras y eficientes.<br /><br />
          Mi enfoque se basa en escribir código limpio, escalable y bien documentado, siempre con la mirada puesta
          en la experiencia de usuario y la eficiencia del sistema. <br /><br />
        </p>

      </div>
      <div className='d-flex flex-row-reverse flex-wrap flex-md-nowrap align-items-center mt-2 mb-4'>
        <a onClick={scrollToTop} className='mx-auto d-xl-none'> <i className="bi bi-arrow-up-circle fs-2 text-primary subir"></i></a>
        <h2 className=' flex-grow-1 mb-0 w-100 '>Ahora, Te invito a ver mis Proyectos <Link to="/proyectos"> <i className="bi bi-arrow-right-square"></i></Link></h2>
      </div>

    </div>
  )
}
