import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import Card from '../Card'
import "./Products.scss"

const Products = () => {
    const {allProducts,loading}=useFetch('https://fakestoreapi.com/products')

    if(loading) return <h1>Loading...</h1>
  return (
    <main className='products-container'>
      {allProducts?.map(product=>{
        const {id, title, price,category,image, rating}=product

        return <Card key={id} title={title} image={image} price={price} id={id}/>
      })}
    </main>
  )
}

export default Products
