import React from 'react';
import './Pagination.scss';
import { useFilterContext } from '../../../contexts/FilterContext';
import { useProductContext } from '../../../contexts/ProductContext';

const Pagination = () => {

    const {currentPage,setCurrentPage}=useFilterContext()
    const {products}=useProductContext()
 const totalPages=Math.ceil(products.length/5)

const pageNumbers=Array.from({ length: totalPages }, (_, index) => index + 1);

const onPageChange=(page)=>{
setCurrentPage(page)
}

  return (
    <div className="pagination">
        <button className='pagination-link'>◀️</button>
      {pageNumbers?.map((page) => (
      
          <button key={page}
            className={`pagination-link ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
    
      ))}
      <button className='pagination-link'>▶️</button>
    </div>
  );
};

export default Pagination;
