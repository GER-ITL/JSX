import React from 'react'


const CarsItem = ({car}) => {
  return (
    <div className="car-item" key={car.id}>
    <div
      className="car-image"
      style={{ backgroundImage: `url(${car.image})` }}
    />
    <div className="car-info">
      <h2>{car.name}</h2>
      <p>{car.price} $</p>
      <button className="car-btn">Read more</button>
    </div>
  </div>

  )
}

export default CarsItem