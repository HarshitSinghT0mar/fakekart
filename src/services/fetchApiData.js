export const fetchApiData = async (api) => {
    // API call to get categories
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };


