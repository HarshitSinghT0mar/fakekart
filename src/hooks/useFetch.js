import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    try {
      setLoading(true);
      fetch(api)
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchSingleProduct=async (api)=>{
    const [singleProduct, setSingleProduct] = useState(null);
 
  const res=await fetch(api)
  const data=await res.json()
  data.length?.setSingleProduct(data)
  return {setSingleProduct,singleProduct}
};

  return { allProducts, setAllProducts, loading,fetchSingleProduct};
};
