import React from 'react'
import './Character.css'

export default function Characters({ characters = [], getData }) {
  return (
    <div className='card-flex'>
      {characters.map((c, index) => (
        <div className='card' key={index}>
          <div className='container'>
            <p>CHARACTER</p>
            <h4>
              <b>{c.name}</b>
            </h4>
            <hr />
            <button
              onClick={() => getData(c.name, c.height, c.hair_color, c.gender)}
            >
              More info
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
