import React from "react";

import "./Products.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Filters from "../Filters/Filters";
import { useFetchData } from "../../hooks/useFetchData";

const Products = () => {
  const {data:allProducts } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  // if (loading) return <h1>Loading...</h1>;
  return (
    <div className="home">
    <Filters allProducts={allProducts} />
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
