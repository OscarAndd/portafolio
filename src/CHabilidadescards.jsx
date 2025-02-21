import React from 'react'
import CHabilidadesModelo from './CHabilidadesModelo'
import { DarkmodeContext } from './DarkmodeContext'
    
export default function CHabilidadescards(props) {
    const { isClicked } = React.useContext(DarkmodeContext);
    return (
        <div>
            <div className='col h-100 justify-content-around '>
                <div className={`card  h-100 ${ isClicked ? "darkProj"  :"dayProj" } `} >
                    <div className="card-header fs-3 fw-bold">{props.habilidades.titulo}</div>
                    <div className="card-body text-start">
                        {/* enviar titulo y porcentaje por la cantidad de habilidades que hayan*/}
                        {props.habilidades.habilidades.map((habilidad, index) => (
                            <CHabilidadesModelo
                                habilidad={habilidad}
                                porcentaje={props.habilidades.porcentajes[index]}
                                key={index + 1}
                            />
                        ))}

                        

                    </div>
                </div>
            </div>
        </div>
    )
}
// {props.map((image, index) => (
//     <div className="carousel-item" data-bs-interval="3000" key={index + 1}>
//         <img src={image} className="w-100 " alt="..." />
//     </div>
// ))}