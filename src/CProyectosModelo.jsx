import React, { useEffect } from 'react'
import CCarousel from './CCarousel'
import { DarkmodeContext } from './DarkmodeContext'
export default function CProyectosModelo(props) {
    const { isClicked } = React.useContext(DarkmodeContext);

    // useEffect(() => {
    //     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    //     const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //         return new window.bootstrap.Tooltip(tooltipTriggerEl);
    //     });
    // }, []);

    return (
        <div className='row   justify-content-center align-items-center '>
            <div className={`card col-12 mt-3 ${ isClicked ? "text-bg-dark"  :"dayProj" } `} >
                <div className="row h-100 ">
                    <div className="col-md-4 my-auto ">
                    <h4 className="card-title d-md-none my-2">{props.titulo}</h4>
                    <h6 className="card-subtitle d-md-none ">{props.subtitulo}</h6>
                        <CCarousel imagenes={props.imagenes} idCarousel={props.idCarousel} />
                    </div>
                    <div className="col-md-8 h-auto  ">
                        <div className="card-body d-flex flex-column h-100">
                            <div className='flex-grow-1'>
                                <h4 className="card-title d-none d-md-block">{props.titulo}</h4>
                                <h6 className="card-subtitle d-none d-md-block">{props.subtitulo}</h6>

                                <p className="card-text text-justify mt-1 mt-md-4 ">
                                    {props.descripcion}
                                </p>
                            </div>
                            <div className='mt-3 d-flex flex-wrap justify-content-center'>
                                <a className='mx-3' href={props.linkRepositorio} target='blank' >Ver código<i className="bi bi-github ms-1"></i></a>
                                <a  className='mx-3' href={props.linkPagina} target='blank' >{props.linkPagina ? "Ver Proyecto":""}{props.linkPagina ? <i className="bi bi-browser-chrome ms-1"></i> : ""} </a>
                            </div>
                            {/* <div className='mt-3 d-flex flex-wrap justify-content-center'>
                                <a className='mx-3' href={props.linkRepositorio} target='blank' data-bs-toggle="tooltip" title="Ver código">Ver código<i className="bi bi-github ms-1"></i></a>
                                <a  className='mx-3' href={props.linkPagina} target='blank' data-bs-toggle="tooltip" title="Ver proyecto">{props.linkPagina ? "Ver Proyecto":""}{props.linkPagina ? <i className="bi bi-browser-chrome ms-1"></i> : ""} </a>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
