import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
const SingleProduct = () => {
  const { id } = useParams();

  const api = `https://fakestoreapi.com/products/${id}`;
  const { data: productDetails } = useFetchData(api);

  console.log(productDetails);
  const { productId, title, price, category, image, rating, description } =
    productDetails;
  // if(productDetails.length===0) return <h1>Loading...</h1>

  return (
    <>
      <ProductDetailsCard
        image={image}
        price={price}
        description={description}
        category={category}
        rating={rating}
        title={title}
      />
    </>
  );
};

export default SingleProduct;
