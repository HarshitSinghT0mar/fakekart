import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Products from "../../components/Products/Products";
import Pagination from "../../components/common/Pagination/Pagination";
import './Home.scss'
import { useFilterContext } from "../../contexts/FilterContext";
import { useFetchData } from "../../hooks/useFetchData";

const Home = () => {
  // const { selectedCategory,setTotalProducts,totalProducts } = useFilterContext();

  // const allProductApi = `https://fakestoreapi.com/products`;
  // const categoryApi = `https://fakestoreapi.com/products/category/${selectedCategory}`;

  // const { data: products, setData:setProducts } = useFetchData(
  //   selectedCategory.length ? categoryApi : allProductApi
  // );
//  useEffect(()=>{
//   setTotalProducts(products)
//  },[])


  return (
    <>
      <div className="home">
        <Filters />
        <Products />
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default Home;
