import React from 'react'
import './Card.scss'

const Card = (props) => {
  const {category,title,price,image}=props
  return (
    <div className='card-container'>
       <div className='card-image-container'>
         <img src={image} />
         <p className='category'>{category}</p>
       </div>
    <div className='card-body'>
      <p className='title'>{title}</p>
      {/* <p>{}</p> */}
    
    <div className='card-footer'>
      <span className='price'>{`$ ${price}`}</span>
      <button className='add-cart-btn'>Add to Cart</button>
    </div>
    </div>
    </div>

  )
}

export default Card
