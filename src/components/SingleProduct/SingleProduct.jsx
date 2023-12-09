import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
const SingleProduct = () => {
  const [singleProduct,setSingleProduct]=useState([])
  const [loading, setLoading]=useState(false)
    const {id}=useParams()

const api=`https://fakestoreapi.com/products/${id}`

  const fetchSingleProduct=async ()=>{
  setLoading(true)
  const res=await fetch(api)
  const data=await res.json()
   if(data.length)setSingleProduct(data)
setLoading(false)
};

useEffect(()=>{
fetchSingleProduct()
},[singleProduct])
   

if(loading) return <p>Loading....</p>

console.log(singleProduct);

  return (
    <div>
    {singleProduct?.map((product)=>{
      const { id, title, price, category, image, rating,description} = product;

      return <ProductDetailsCard image={image} price={price} description={description} category={category} rating={rating} title={title}/>

    })}
 
    </div>
  )
}

export default SingleProduct
