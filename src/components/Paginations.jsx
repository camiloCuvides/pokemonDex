import React from 'react'

const Paginations = ({ postsPerPage, totalPage, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPage / postsPerPage ); i++){
        pageNumbers.push(i)
    }

  return (
    <>
       <div className='contenedor_paginacion' >
            <ul className='ul_paginacion'>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <span></span>
                            <button onClick={() => paginate(number)} className={`paginate_button ${number  === currentPage ? 'current' : ''}`}>{number}</button>
                        </li>
                    ))}
            </ul>
        </div>  

    </>
  )
}

export default Paginations