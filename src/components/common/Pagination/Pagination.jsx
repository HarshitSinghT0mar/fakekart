import React from 'react';
import './Pagination.scss';
import { useFilterContext } from '../../../contexts/FilterContext';

const Pagination = ({ totalProducts}) => {

//     const {currentPage,setCurrentPage}=useFilterContext()
//  const totalPages=Math.ceil(totalProducts.length/5)

// const pageNumbers=Array.from({ length: totalPages }, (_, index) => index + 1);

// const onPageChange=(page)=>{
// setCurrentPage(page)
// }

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
