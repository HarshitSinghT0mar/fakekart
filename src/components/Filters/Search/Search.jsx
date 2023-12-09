import React, { useState } from 'react';
import './SearchComponent.scss';

const SearchComponent = ({ onSearch }) => {


  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name or category"
      
      />
      <button>Search</button>
    </div>
  );
};

export default SearchComponent;
