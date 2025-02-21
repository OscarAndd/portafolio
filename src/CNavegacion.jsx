import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DarkmodeContext } from './DarkmodeContext'

export default function CNavegacion() {
    const [iconKey, setIconKey] = useState(0); // Estado para forzar la re-renderización del icono
    const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión del menú
    const location = useLocation();
    const { isClicked, toggleDarkMode } = React.useContext(DarkmodeContext);
    
    function darkMode() {
        console.log("entrando a cambiar el tema")
        toggleDarkMode(!isClicked);
        setIconKey(prevKey => prevKey + 1); // Actualiza el estado para forzar la re-renderización
    }

    // useEffect(() => {
    //     const myTimeout = setTimeout(darkMode, 1);
    //     return () => clearTimeout(myTimeout); // Limpia el timeout cuando el componente se desmonte
    // }, []); // El array vacío asegura que el efecto se ejecute solo una vez

    useEffect(() => {
        function handleBodyClick(e) {
            //console.log(e.target.closest('.navbar-collapse'));
            //console.log("Clicked element:", e.target);
            if (e.target.closest('.navbar-nav')!==null || e.target.closest('.ocultar')!==null) {
                setIsExpanded(false);
            }
        }
        document.body.addEventListener('click', handleBodyClick);
        return () => {
            document.body.removeEventListener('click', handleBodyClick); // Limpia el event listener cuando el componente se desmonte
        };
    }, []);
    
    function toggleMenu() {
        setIsExpanded(!isExpanded); // Alterna el estado del menú
    }
    return (
        <>
            <nav className={`navbar z-3 navbar-expand-md nav-underline border-botton ${isClicked ? 'dark-mode' : 'dayNav'}`}>
                <div className="container-fluid">
                    <h5 className=" me-0 my-0" >
                        Oscar A. Alvarez
                    </h5>
                    <button
                        className={`navbar-toggler d-lg-none `}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="collapsibleNavId">
                        <ul className="navbar-nav mx-auto mt-lg-0">
                            <li className="nav-item mx-lg-3">
                                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page">
                                    INICIO
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-3">
                                <Link to="/acerca" className={`nav-link ${location.pathname === '/acerca' ? 'active' : ''}`}>
                                    SOBRE MÍ
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-3">
                                <Link to="/proyectos" className={`nav-link ${location.pathname === '/proyectos' ? 'active' : ''}`}>
                                    PROYECTOS
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-3">
                                <Link to="/habilidades" className={`nav-link ${location.pathname === '/habilidades' ? 'active' : ''}`}>
                                    HABILIDADES
                                </Link>
                            </li>
                            <li className="nav-item mx-lg-3">
                                <Link to="/experiencia" className={`nav-link ${location.pathname === '/experiencia' ? 'active' : ''}`}>
                                    EXPERIENCIA
                                </Link>
                            </li>
                            
                        </ul>

                        <button onClick={darkMode} className="btn btn-outline-success my-2 my-sm-0 btn-height d-none d-md-block" type="submit">
                            <i key={iconKey} className={`bi ${isClicked ? 'bi-sun text-light' : 'bi-moon text-dark'} icono`}></i>
                        </button>
                        <div className='mt-2'>
                            <button onClick={darkMode} className="btn btn-outline-success my-2 my-sm-0 btn-height d-md-none btn-darkmode" type="submit">
                                Cambiar a modo {isClicked ? "Claro" : "Oscuro"}
                                <i key={iconKey} className={`ms-3 icono bi  px-1 ${isClicked ? 'bi-sun text-light' : 'bi-moon text-dark'}`}></i>                            </button>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}
