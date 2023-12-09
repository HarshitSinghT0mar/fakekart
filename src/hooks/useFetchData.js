import { useEffect, useState } from "react";
import { fetchApiData } from "../services/fetchApiData";

export const useFetchData=(api)=>{
    const [data, setData] = useState([]);

    console.log(api);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetchApiData(api);
          setData(res);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [api]);

    return {data,setData}
  
}