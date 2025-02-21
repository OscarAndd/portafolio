import React from 'react'

export default function CImagenesCarousel(props) {
    return (
        <>
            <div className="carousel-item active " data-bs-interval="3000">
                <img src={props.imagenes[0]} className="w-100 " alt="..." />
            </div>
        </>
    )
}
