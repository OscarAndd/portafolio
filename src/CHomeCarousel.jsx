import React from 'react'

export default function CHomeCarousel() {
    return (
        <div>

<div
  id="carouselExampleInterval"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={1000}>
      <img src="..." className="d-block w-100" alt="f1" />
    </div>
    <div className="carousel-item" data-bs-interval={1000}>
      <img src="..." className="d-block w-100" alt="f2" />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="f3" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleInterval"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </div>
    )
}
