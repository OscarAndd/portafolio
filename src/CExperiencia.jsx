import React, { useRef } from 'react';
import { DarkmodeContext } from './DarkmodeContext';

export default function CExperiencia() {
  const { isClicked } = React.useContext(DarkmodeContext);

  // Crear referencias para los elementos de destino
  const item1Ref = useRef(null);
  const item11Ref = useRef(null);
  const item12Ref = useRef(null);
  const item3Ref = useRef(null);
  const item31Ref = useRef(null);
  const item32Ref = useRef(null);
  const item4Ref = useRef(null);
  const item41Ref = useRef(null);
  const item42Ref = useRef(null);

  // Función para desplazarse a un elemento específico
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`container-fluid flex-grow-1 justify-content-center ocultar zoom-in`}>
      <p className='mt-4 fst-italic opacity-50 d-md-none'>EXPERIENCIA</p>

      <div className={`row border my-4 mx-1  ${isClicked ? "darkProj" : "dayProj"}`}>
        <div className="col-12 col-sm-6 border-bottom border-end ">
          <h5 className='fst-italic opacity-50 mt-2'>Empleos</h5>
          <ul id="navbar-example3" className={`h-100  mt-4  text-start ps-3 ps-sm-4 `}>

            <a className="nav-link active mt-3 subir" onClick={() => scrollToRef(item4Ref)}>INDEPENDIENTE</a>
            <li className='ms-4 ms-sm-4 ms-md-4'><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item41Ref)}>Cargo</a></li>
            <li className='ms-4 '><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item42Ref)}>Responsabilidades</a></li>
            <a className="nav-link active mt-3 subir" onClick={() => scrollToRef(item1Ref)}>PIDCO DE COLOMBIA S.A.S</a>
            <li className='ms-4  '><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item11Ref)}>Cargo</a></li>
            <li className='ms-4 '><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item12Ref)}>Responsabilidades</a></li>
            <a className="nav-link active mt-3 subir" onClick={() => scrollToRef(item3Ref)}>TEKMAQ S.A.S</a>
            <li className='ms-4 ms-sm-4 ms-md-4'><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item31Ref)}>Cargo</a></li>
            <li className='ms-4 '><a className="nav-link ms-0 my-1 subir" onClick={() => scrollToRef(item32Ref)}>Responsabilidades</a></li>

          </ul>
        </div>

        <div className="col-12 col-sm-6 mt-3 mt-sm-2">
          <h5 className='fst-italic opacity-50 mt-0'>Detalles</h5>
          <div className="scrollspy-example-2 text-justify" tabIndex={0} style={{ maxHeight: '400px', overflowY: 'auto' }}>


            <div id="item-4" ref={item4Ref}>
              <h4 className='active'>INDEPENDIENTE</h4>
            </div>
            <div id="item-4-1" ref={item41Ref}>
              <h5>Cargo.</h5>
              <p>Actualmente me desempeño como <b> Tecnólogo Electrónico </b>aplicando mis conocimientos en diferentes
                campos de la tecnología.
              </p>
            </div>
            <div id="item-4-2" ref={item42Ref}>
              <h5>Responsabilidades.</h5>
              <div>Mis responsabilidades se basan en cumplir a cabalidad con los proyectos que se me encomienden.
                Algunos de los proyectos consisten en:<br></br>
                <ul>
                  <li>Diseño y desarrollo de Aplicaciones Web responsivas .</li>
                  <li>Resolución de algoritmos e implementacion en distintos lenguajes de programación.</li>
                  <li>Diseño e implementación de sistemas domóticos.</li>
                  <li>Desarrollo de aplicaciones de escritorio con Java SE.</li>
                  <li>Conexión a bases de datos desde distintos lenguajes de programación.</li>
                  <li>Desarrollo de chats en tiempo real con python.</li>
                  <li>Consumo de APIs desde javaScript .</li>
                  <li>Otros.</li>

                </ul>
              </div>
            </div>


            <div id="item-1" ref={item1Ref}>
              <h4 className='active'>PIDCO DE COLOMBIA S.A.S</h4>
            </div>
            <div id="item-1-1" ref={item11Ref}>
              <h5>Cargo.</h5>
              <p>En esta empresa ocupaba el cargo de <b>Técnico de Automatización Industrial</b> durante un poco
                mas <b> 2 años</b>. Esta empresa se dedica a la importación, fabricación y comercialización de maquinaria
                para el empaque distintos tipos de productos.
              </p>
            </div>
            <div id="item-1-2" ref={item12Ref}>
              <h5>Responsabilidades.</h5>
              <p>En este cargo, tenía bajo mi responsabilidad realizar la programación de los controladores
                lógicos programables (PLC). Estos dispositivos, en la mayoría de los casos, son los encargados
                de que las máquinas industriales funcionen como es debido. Para esta tarea, debía diseñar los
                algoritmos e implementarlos, para lo cual utilizaba el concepto de Programación Orientada a
                Objetos Industrial (POOI). En la implementación de la programación, me valía de distintos
                lenguajes de programación según fuera la necesidad. Adicionalmente era encargado de diseñar y programar
                las (HMI), las cuales permiten al usuario interactuar con la máquina através de una pantalla.
                Durante mi estancia en esta empresa, llegué a realizar más de 50 programas utilizando distintos paradigmas
                de programación y aplicándolos a la industria.
              </p>
            </div>
            <div id="item-3" ref={item3Ref}>
              <h4 className='active'>TEKMAQ S.A.S</h4>
            </div>
            <div id="item-3-1" ref={item31Ref}>
              <h5>Cargo.</h5>
              <p>En esta empresa ocupé el cargo de <b>Técnico de Automatización Industrial</b> durante
                <b> 2 meses</b>. Esta empresa se dedica a la comercialización de maquinaria
                para el empaque distintos tipos de productos.
              </p>
            </div>
            <div id="item-3-2" ref={item32Ref}>
              <h5>Responsabilidades.</h5>
              <p>
                Para esta empresa, mi responsabilidad consistía en el diseño e implementación de los algoritmos
                de dos máquinas empacadoras y sus correspondientes interfaces de usuario (HMI). En ambas máquinas,
                el programa principal consistía en la sincronización de bandas transportadoras, responder de manera
                inmediata a las peticiones del usuario, obtener información de sensores y aplicar los estándares
                de programación industrial.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}