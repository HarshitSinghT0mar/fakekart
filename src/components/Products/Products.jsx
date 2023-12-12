import React, { useEffect } from "react";
import "./Products.scss";
import Card from "../Card/Card";
import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductContext";



const Products = () => {
  // const {searchQuery,setSearchQuery}=useFilterContext()

const {products}=useProductContext()

  // const searchFilteredProducts= totalProducts.filter((product)=>{
  //   const {title,category}=product
  //   return title.toLowerCase().includes(searchQuery) || category.toLowerCase().includes(searchQuery)
   
  // })


  

// useEffect(()=>{
// setProducts(searchFilteredProducts)
// },[searchQuery])

 
  if (products.length===0) return <p>Loading...</p>;

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
          />
        );
      })}
    </main>
  );
};

export default Products;
