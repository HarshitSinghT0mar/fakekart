import React from "react";
import "./Filters.scss";

import SearchComponent from "./Search/Search";
import { useFetchData } from "../../hooks/useFetchData";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import PriceFilter from "./PriceFilter/PriceFilter";


const Filters = () => {

  return (
    <div className="filters-container">
      <h2>Filters</h2>
    <SearchComponent />
    <CategoryFilter />
    <PriceFilter />
     
    </div>
  );
};

export default Filters;
