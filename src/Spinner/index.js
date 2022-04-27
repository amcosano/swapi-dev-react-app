import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <>
      <div className='spinner-container'>
        <div className='spinner-message'>
          <p>
            MAY THE <span className='spinner-span'>fetch()</span> BE WITH YOU
          </p>
        </div>
        <div className='spinner'></div>
      </div>
    </>
  )
}
