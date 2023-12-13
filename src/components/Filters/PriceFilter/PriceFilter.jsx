import React, { useState } from 'react';
import { useProductContext } from '../../../contexts/ProductContext';

const PriceFilter = () => {
    const [selectedPriceRanges,setSelectedPriceRanges]=useState([])
    const {products,setProducts}=useProductContext()
  const priceRanges = ['$0 - $50', '$50 - $100', '$100 - $300', '$300-$500',"$500+"];


selectedPriceRanges.length&&selectedPriceRanges.forEach((priceRange)=>{

    const res=priceRange.split('-').join('')
   
 const priceFilteredProducts= products.filter(({price})=>{
    return res.includes(price)
  })
console.log(priceFilteredProducts);

})


  return (
    <div className='filter price-filter-container'>
    <h4>Price</h4>
      {priceRanges?.map((priceRange) => (
        <div key={priceRange}>
          <input
            type="checkbox"
            value={priceRange}
            defaultChecked={priceRange === 'All'}
            onChange={() => setSelectedPriceRanges(prev=>([...prev,priceRange]))}
          />
          {priceRange}
        </div>
      ))}
    </div>
  );
};

export default PriceFilter;

