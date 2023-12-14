import React, { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../Card/Card";
import { useProductContext } from "../../contexts/ProductContext";
import { useCartContext } from "../../contexts/CartContext";



const Products = () => {

const {products,loading}=useProductContext()

const {cartItems,setCartItems}=useCartContext()



const addToCart=(id)=>{
  const productExists = cartItems?.some((item) => item.id === id);
    if (productExists) {
      return;
    }

    const newCartItem=products.find(product=>product.id===id)

    setCartItems(prev=>{
      return [...prev,newCartItem]
    })
}

console.log(cartItems);
 
  if (loading) return <p>Loading...</p>;

  return (
    <main className="products-container">
      {products?.map((product) => {
        const { id, title, price, category, image } = product;

        return (
          <Card
            key={id}
            title={title}
            image={image}
            price={price}
            id={id}
            category={category}
            addToCart={addToCart}
          />
        );
      })}
    </main>
  );
};

export default Products;
