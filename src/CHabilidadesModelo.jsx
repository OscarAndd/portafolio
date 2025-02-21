import React from 'react'

export default function CHabilidadesModelo(props) {
    return (
        <>
            <h4 className="card-title">{props.habilidad} </h4>
            <div className="progress mb-4 bg-secondary">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: props.porcentaje}}
                >
                    {props.porcentaje}
                </div>
            </div>
        </>
        
    )
}
