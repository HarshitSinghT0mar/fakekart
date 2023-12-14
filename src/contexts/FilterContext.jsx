import { createContext, useContext, useState } from 'react';


const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage,setCurrentPage]=useState();


  const contextValue = {
    priceFilter,
    setPriceFilter,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
 
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
