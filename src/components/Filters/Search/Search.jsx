import React, { useEffect, useState } from 'react';
import './SearchComponent.scss';
import { useFilterContext } from '../../../contexts/FilterContext';
import { useProductContext } from '../../../contexts/ProductContext';

const SearchComponent = () => {
const {searchQuery,setSearchQuery}=useFilterContext()
const [searchText, setSearchText]=useState()

const {setProducts,allProducts}=useProductContext()


const searchProduct=()=>{
  setSearchQuery(searchText)
  setSearchText('')
}


  const searchFilteredProducts= allProducts.filter((product)=>{
    const {title,category}=product
    return title.toLowerCase().includes(searchQuery) || category.toLowerCase().startsWith(searchQuery)
   
  })





useEffect(()=>{
searchQuery.length?setProducts(searchFilteredProducts):setProducts(allProducts)

},[searchQuery])



  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
      />
      <button onClick={searchProduct}>Search</button>
    </div>
  );
};

export default SearchComponent;
