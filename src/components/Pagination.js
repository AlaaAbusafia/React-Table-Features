import React from 'react'

const Pagination = ({rowsPerPage, totalRows, paginate}) => {
    
    const pageNumbers = [];

    //Calculate the page numbers
    for( let i = 1; i<=Math.ceil(totalRows/rowsPerPage); i++){
        pageNumbers.push(i);
    }
    

    return (
        <nav>
            {/* display the page numbers */}
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} 
                            href='!#' className='page-link'>{number}</a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
