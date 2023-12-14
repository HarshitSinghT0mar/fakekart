import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  
  const { data: allProducts, setData: setAllProducts, loading, setLoading } = useFetchData(
    `https://fakestoreapi.com/products`
  );
  const [products, setProducts] = useState([]);
  const [cartItems,setCartItems]=useState([])

  // console.log(products, cartItems);

useEffect(()=>{
setProducts(allProducts)
},[allProducts,setAllProducts])

  return (
    <ProductContext.Provider
      value={{ products, setProducts, allProducts, setAllProducts,loading, setLoading,cartItems,setCartItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// custom hook to consume the context
export const useProductContext = () => {
  return useContext(ProductContext);
};
