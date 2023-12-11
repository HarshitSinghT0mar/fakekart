import React, { useState } from 'react';
import './SearchComponent.scss';
import { useFilterContext } from '../../../contexts/FilterContext';

const SearchComponent = () => {
const {searchQuery,setSearchQuery}=useFilterContext()

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchComponent;
