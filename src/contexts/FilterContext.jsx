import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage,setCurrentPage]=useState();
  const [totalProducts,setTotalProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])

  // console.log(filteredProducts);

  const contextValue = {
    selectedCategory,
    setSelectedCategory,
    priceFilter,
    setPriceFilter,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalProducts,
    setTotalProducts
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
