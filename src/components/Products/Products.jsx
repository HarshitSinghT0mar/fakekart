import React from "react";

import "./Products.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Filters from "../Filters/Filters";
import { useFetchData } from "../../hooks/useFetchData";
import { useFilterContext } from "../../contexts/FilterContext";

const Products = () => {
  const { selectedCategory } = useFilterContext();

  const allProductApi=`https://fakestoreapi.com/products`
  const categoryApi= `https://fakestoreapi.com/products/category/${selectedCategory}`

  const { data: allProducts,setData } = useFetchData(
 
    selectedCategory.length?categoryApi:allProductApi
  );
  

  return (
    <div className="home">
      <Filters />
      <main className="products-container">
        {allProducts?.map((product) => {
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
    </div>
  );
};

export default Products;
