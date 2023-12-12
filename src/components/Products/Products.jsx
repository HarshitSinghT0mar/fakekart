import React from "react";
import "./Products.scss";
import Card from "../Card/Card";



const Products = ({allProducts}) => {
 
  if (allProducts.length === 0) return <p>Loading...</p>;

  return (
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
  );
};

export default Products;
