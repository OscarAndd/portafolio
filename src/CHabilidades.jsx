import React from 'react';
import CHabilidadescards from './CHabilidadescards';
import { Link } from 'react-router-dom';
let lenguajes = {
  titulo: "Lenguajes de Programación",
  habilidades: ["Java", "Python", "C", "JavaScript", "Kotlin"],
  porcentajes: ["90%", "70%", "75%", "85%", "60%"]
};
let frameworks = {
  titulo: "Frameworks y Bibliotecas",
  habilidades: ["React", "Flask", "SpringBoot", "Bootstrap"],
  porcentajes: ["80%", "70%", "75%", "90%"]
}
let DB = {
  titulo: "Bases de Datos",
  habilidades: ["MySQL", "PostgreSQL", "IndexedDB", "SQLite"],
  porcentajes: ["90%", "85%", "75%", "80%"]
}
let herramientas = {
  titulo: "Herramientas",
  habilidades: ["Git", "GitHub", "VS Code", "Jira", "Azure DevOps Server", "IntelliJ IDEA", "NetBeans"],
  porcentajes: ["70%", "85%", "90%", "60%", "60%", "90%", "90%"]
}
let HablBlandas = {
  titulo: "Habilidades Blandas",
  habilidades: ["Comunicación", "Trabajo en equipo", "Liderazgo", "Resolución de Problemas", "Gestión del Tiempo", "Adaptabilidad"],
  porcentajes: ["90%", "95%", "80%", "95%", "90%", "95%"]
}
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
export default function CHabilidades() {
  return (
    <div className='container fade-in-scale '>
            <p className='text-center mt-4 fst-italic opacity-50 flex-grow-1 ocultar d-md-none'>HABILIDADES</p>

      <div className='row row-cols-1 row-cols-lg-2 g-3 mt-3  '> {/* Agrega la clase `g-3` para un margen entre columnas */}
        {/* enviar titulo de la habilidad/ habilidades /porcentajees */}
        <CHabilidadescards habilidades={lenguajes} />
        <CHabilidadescards habilidades={frameworks} />
        <CHabilidadescards habilidades={DB} />
        <CHabilidadescards habilidades={herramientas} />
        <CHabilidadescards habilidades={HablBlandas} />
      </div>

      <div className='d-flex flex-row-reverse flex-wrap flex-md-nowrap align-items-center mt-2 mb-4'>
        <a onClick={scrollToTop} className='mx-auto'> <i className="bi bi-arrow-up-circle fs-2 text-primary subir"></i></a>
        <h2 className=' flex-grow-1 mb-0 w-100 '>Te invito a conocer mi experiencia laboral <Link to="/experiencia"> <i className="bi bi-arrow-right-square"></i></Link></h2>
      </div>
    </div>
  );
}