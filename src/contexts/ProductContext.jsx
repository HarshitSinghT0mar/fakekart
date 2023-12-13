import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { data: allProducts, setData: setAllProducts, loading, setLoading } = useFetchData(
    `https://fakestoreapi.com/products`
  );
  const [products, setProducts] = useState([]);

useEffect(()=>{
setProducts(allProducts)
},[allProducts,setAllProducts])

  return (
    <ProductContext.Provider
      value={{ products, setProducts, allProducts, setAllProducts,loading, setLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useProductContext = () => {
  return useContext(ProductContext);
};
