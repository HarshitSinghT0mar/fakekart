import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const contextValue = {
    selectedCategory,
    setSelectedCategory,
    priceFilter,
    setPriceFilter,
    searchQuery,
    setSearchQuery,
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
