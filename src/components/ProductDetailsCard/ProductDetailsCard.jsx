import React from 'react'
import './ProductDetailsCard.scss'
import Counter from '../common/Counter/Counter'

const ProductDetailsCard = (props) => {
    const {category,title,price,image,id,description}=props
  return (
    <div className='productDetails-card'>
       <div className='image-container'>
        <img src={image} />
       </div>
       <div className='details-text'>
         <h3>{title}</h3>
         <p>{description}</p>
         <div className='productDetails-card-footer'>
          <span>{`$ ${price}`}</span>
           <Counter />
          <button>Add to Cart</button>
         </div>
       </div>
    </div>
  )
}

export default ProductDetailsCard
