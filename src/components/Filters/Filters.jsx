import React, { useEffect, useState } from "react";
import "./Filters.scss";

import SearchComponent from "./Search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import CategoryFilter from "./CategoryFilter/CategoryFilter";


const Filters = () => {

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchData();
//   }, []);



const {data:categories}=useFetchData(`https://fakestoreapi.com/products/categories`)

  return (
    <div className="filters-container">
      <h2>Filters</h2>
    <SearchComponent />
    <CategoryFilter />

      {/* <div className="category-filter-container">
        <h4>Category</h4>

        {categories?.map((category,index) => {
          return (
            <div key={index}>
              <input type="radio" id={category} name="category" />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div> */}
      <div></div>
      <div></div>
    </div>
  );
};

export default Filters;
