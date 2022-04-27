import React from 'react'
import './SorterButtons.css'

export default function SorterButtons({ sortByName, sortByHeight }) {
  return (
    <div className='sorter-container'>
      <div>
        <button onClick={sortByName}>Sort by Name</button>
      </div>
      <div>
        <button onClick={sortByHeight}>Sort by Height</button>
      </div>
    </div>
  )
}
