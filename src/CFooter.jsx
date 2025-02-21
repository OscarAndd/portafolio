import React from 'react'

export default function CFooter() {
  return (
    <div className='container-fluid  row  mx-0 bg-black mt-auto dark '>
      <div className='col-12 col-md-5 mt-1 mt-md-0 '>Copyright: © 2025. Oscar Andres Alvarez</div>
      <div className=' col-12 col-md-3 mt-3 mt-md-0 '>
        <p>contáctame: oaalvarezp@hotmail.com &ensp; <a href="mailto:oaalvarezp@hotmail.com?subject=Consulta&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre."
        ><i className="bi bi-envelope-at"></i></a></p>
      </div>
      <div className=' col-12 col-md-4 my0'>
        <p>visita mi repositorio: &ensp; <a href="https://github.com/OscarAndd"
          ><i className="bi bi-github"></i></a></p>
      </div>
    </div>
  )
}
