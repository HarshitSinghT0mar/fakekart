import React, { useEffect, useState } from "react";
import { useFetchData } from "../../../hooks/useFetchData";
// import { useFilterContext } from '../../../contexts/FilterContext';
import { useProductContext } from "../../../contexts/ProductContext";
import { fetchApiData } from "../../../services/fetchApiData";

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { setProducts } = useProductContext();

  const { data } = useFetchData(`https://fakestoreapi.com/products/categories`);

  //create separate all category that is not present in oroginal api
  const categories = ["All", ...data];
  const api =
    selectedCategory === "All"
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${selectedCategory}`;

  const { data: categoryProducts } = useFetchData(api);

  useEffect(() => {
    categoryProducts.length && setProducts(categoryProducts);
  }, [selectedCategory, categoryProducts]);

  return (
    <div className="filter category-filter-container">
      <h4>Category</h4>

      {categories?.map((category, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={category}
              name="category"
              // checked={selectedCategory === category}
              value={category}
              defaultChecked={category === 'All'}
              onChange={() => setSelectedCategory(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
