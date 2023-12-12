import React, { useState } from 'react';
import './SearchComponent.scss';
import { useFilterContext } from '../../../contexts/FilterContext';

const SearchComponent = () => {
const {searchQuery,setSearchQuery}=useFilterContext()
const [searchText, setSearchText]=useState()


const searchProduct=()=>{
  setSearchQuery(searchText)
}

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
