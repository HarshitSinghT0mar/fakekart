import React from 'react'
import './ProductDetailsCard.scss'

const ProductDetailsCard = (props) => {
    const {category,title,price,image,id,description}=props
  return (
    <div>
       <div className='image-container'>
        <img src={image} />
       </div>
       <div></div>
    </div>
  )
}

export default ProductDetailsCard
