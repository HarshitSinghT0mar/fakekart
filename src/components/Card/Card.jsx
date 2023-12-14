import React, { useState } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const {category,title,price,image,id,addToCart}=props

  return (
   
    <div className='card-container'>
     <Link to={`/products/${id}`}>
       <div className='card-image-container'>
         <img src={image} />
         <p className='category'>{category}</p>
       </div>
       </Link>
    <div className='card-body'>
      <p className='title'>{title}</p>
  
    
    <div className='card-footer'>
      <span className='price'>{`$${price}`}</span>
      <button className='add-cart-btn' onClick={()=>addToCart(id)}>Add to Cart</button>
    </div>
    </div>
    </div>

  )
}

export default Card
