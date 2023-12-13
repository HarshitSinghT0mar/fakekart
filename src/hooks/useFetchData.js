import { useEffect, useState } from "react";
import { fetchApiData } from "../services/fetchApiData";

export const useFetchData=(api)=>{
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(false)

    // console.log(api);

    useEffect(() => {
      const fetchData = async () => {
      
        try {
          setLoading(true)
          const res = await fetchApiData(api);
          setData(res);
        } catch (error) {
          console.error("Api Server Error:", error);
        }finally{
          setLoading(false)
        }
      } 
  
      fetchData();
    }, [api]);

    return {data,setData,loading}
  
}