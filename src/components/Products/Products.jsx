import React, { useEffect } from "react";
import "./Products.scss";
import Card from "../Card/Card";
import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductContext";



const Products = () => {
  // const {searchQuery,setSearchQuery}=useFilterContext()

const {products,loading}=useProductContext()



  

// useEffect(()=>{
// setProducts(searchFilteredProducts)
// },[searchQuery])

 
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
          />
        );
      })}
    </main>
  );
};

export default Products;
