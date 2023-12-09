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

//   const fetchSingleProduct=async (api)=>{
//     setLoading(true)
//     // const [singleProduct, setSingleProduct] = useState(null);
//  const singleProduct=[]
//   const res=await fetch(api)
//   const data=await res.json()
//  await data.length?.res.push(data)

//  setLoading(false)
//   return {singleProduct}
// };

  return { allProducts, setAllProducts, loading};
};
