import React from 'react'
import CImagenesCarousel from './CImagenesCarousel'
import { useState, useEffect } from 'react'
export default function CCarousel(props) {
    let idCarousel = `carouselExampleAutoplaying${props.idCarousel}`
    const [numImagenes, setNumImagenes] = useState(0);

    useEffect(() => {
        setNumImagenes(props.imagenes.length);
        //console.log(numImagenes);
    }, [props.imagenes]);

    
    // useEffect(() => {//inicializo una instacia de carousel para que se active cuando vuelva a la pestaña
    //     const carouselElement = document.getElementById(idCarousel);
    //     if (carouselElement) {
    //         const carousel = new window.bootstrap.Carousel(carouselElement, {
    //             interval: 3000,
    //             ride: 'carousel'//monto el carousel
    //         });
    //         return () => {
    //             carousel.dispose();
    //         };
    //     }
    // }, [idCarousel]);

    
    return (
        <>
            <div
                id={idCarousel}
                className="carousel slide mt-2 mt-md-0"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner my-2">
                    <div className="carousel-item active " data-bs-interval="3000">
                        <img src={props.imagenes[0]} className="w-100  " alt="..." />
                    </div>
                    {props.imagenes.slice(1).map((image, index) => (
                        <div className="carousel-item" data-bs-interval="3000" key={index + 1}>
                            <img src={image} className="w-100 " alt="..." />
                        </div>
                    ))}

                </div>
                {numImagenes > 1 && (<>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={"#" + idCarousel}
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next "
                        type="button"
                        data-bs-target={"#" + idCarousel}
                        data-bs-slide="next"
                        
                    >
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </>)
                }

            </div>

        </>
    )
}
