import React from 'react'
import './Character.css'

export default function Characters({ characters = [], getModalData }) {
  return (
    <div className='card-flex'>
      {characters.map((c, index) => (
        <div className='card' key={index}>
          <div className='container'>
            <p>CHARACTER</p>
            <h4>
              <b>{c.name}</b>
            </h4>
            <div>
              <button
                onClick={() =>
                  getModalData(
                    c.name.toUpperCase(),
                    c.height,
                    c.hair_color.toUpperCase(),
                    c.gender.toUpperCase()
                  )
                }
              >
                More info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
