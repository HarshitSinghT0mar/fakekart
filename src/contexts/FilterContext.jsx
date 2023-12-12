import { createContext, useContext, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage,setCurrentPage]=useState();
  // const [filteredProducts,setFilteredProducts]=useState([])

  // console.log(filteredProducts);

  // const {data: allProducts ,setData:setAllProducts}=useFetchData(`https://fakestoreapi.com/products`)

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
