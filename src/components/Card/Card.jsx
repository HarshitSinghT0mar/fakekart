import React from 'react'
import './Card.scss'

const Card = (props) => {
  const {item,title,price,image}=props
  return (
    <div className='card-container'>
       <div className='card-image-container'>
         <img src={image} />
       </div>
    <div className='card-text'>
      <p className='title'>{title}</p>
      {/* <p>{}</p> */}
    </div>
    <div className='card-footer'>
      <span className='price'>{price}</span>
      <button className='add-cart-btn'>Add to Cart</button>
    </div>
    </div>
  )
}

export default Card
