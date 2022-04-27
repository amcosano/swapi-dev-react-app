import React from 'react'
import './Pagination.css'

export default function Pagination({ nextPage, prevPage }) {
  return (
    <div className='pagination-container'>
      <div>{prevPage && <button onClick={prevPage}>Previous</button>}</div>
      <div>{nextPage && <button onClick={nextPage}>Next</button>}</div>
    </div>
  )
}
