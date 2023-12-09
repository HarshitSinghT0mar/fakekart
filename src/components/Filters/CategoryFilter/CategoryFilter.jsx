import React, { useState } from 'react'
import { useFetchData } from '../../../hooks/useFetchData';
import { useFilterContext } from '../../../contexts/FilterContext';


const CategoryFilter = () => {
    const {setSelectedCategory}=useFilterContext()

    const {data:categories}=useFetchData(`https://fakestoreapi.com/products/categories`)


  return (
    <div className="category-filter-container">
        <h4>Category</h4>

        {categories?.map((category,index) => {
          return (
            <div key={index}>
              <input type="radio" id={category} name="category" value={category} onChange={()=>setSelectedCategory(category)}/>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>
  )
}

export default CategoryFilter
