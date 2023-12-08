import React from 'react'
import { useFetch } from  '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id}=useParams()

    const {fetchSingleProduct}=useFetch(`https://fakestoreapi.com/products/${id}`)
  return (
    <div>
      Single Product
    </div>
  )
}

export default SingleProduct
