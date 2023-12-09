import React, { useState } from 'react'
import { useFetchData } from '../../../hooks/useFetchData';

const CategoryFilter = () => {
    const [selectedCategory,setSelectedCategory]=useState([])

    const {data:categories}=useFetchData(`https://fakestoreapi.com/products/categories`)

    const selectCategory=(category)=>{
       setSelectedCategory(category)
    }

    // console.log(selectedCategory);
  return (
    <div className="category-filter-container">
        <h4>Category</h4>

        {categories?.map((category,index) => {
          return (
            <div key={index}>
              <input type="radio" id={category} name="category" value={category} onChange={(e)=>selectCategory(category)}/>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>
  )
}

export default CategoryFilter
