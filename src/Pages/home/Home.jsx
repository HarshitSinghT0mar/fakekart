import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import Pagination from "../../components/common/Pagination/Pagination";
import './Home.scss'
import { useFilterContext } from "../../contexts/FilterContext";
import { useFetchData } from "../../hooks/useFetchData";

const Home = () => {
  const { selectedCategory,setTotalProducts } = useFilterContext();

  const allProductApi = `https://fakestoreapi.com/products`;
  const categoryApi = `https://fakestoreapi.com/products/category/${selectedCategory}`;

  const { data: allProducts } = useFetchData(
    selectedCategory.length ? categoryApi : allProductApi
  );
 useEffect(()=>{
  setTotalProducts(allProducts)
 })



  return (
    <>
      <div className="home">
        <Filters />
        <Products allProducts={allProducts}/>
      </div>
      <Pagination totalProducts={allProducts}/>
    </>
  );
};

export default Home;
