import React, { useEffect, useState } from 'react'
import { useFetchData } from '../../../hooks/useFetchData';
// import { useFilterContext } from '../../../contexts/FilterContext';
import { useProductContext } from '../../../contexts/ProductContext';


const CategoryFilter = () => {
    const [selectedCategory,setSelectedCategory]=useState('')
    const {setProducts,products}=useProductContext()

    const {data:categories}=useFetchData(`https://fakestoreapi.com/products/categories`)

    const {data:categoryProducts}=useFetchData(`https://fakestoreapi.com/products/category/${selectedCategory}`)

useEffect(()=>{
    
categoryProducts.length && setProducts(categoryProducts)

},[selectedCategory,categoryProducts])
 
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
