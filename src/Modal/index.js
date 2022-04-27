import React from 'react'
import './Modal.css'

const INVALID_VALUE = {
  NA: 'n/a',
  Unknown: 'unknown',
  None: 'none',
}

export default function Modal({ name, height, hairColor, gender, closeModal }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>DETAILED INFO</h1>
        </div>
        <hr />
        <div className='modal-main'>
          <div>
            <p>NAME</p>
            <h2>{name}</h2>
          </div>
          {[
            INVALID_VALUE.NA,
            INVALID_VALUE.Unknown,
            INVALID_VALUE.None,
          ].includes(height) ? (
            ''
          ) : (
            <div>
              <p>HEIGHT</p>
              <h2>{height}</h2>
            </div>
          )}
          {[
            INVALID_VALUE.NA,
            INVALID_VALUE.Unknown,
            INVALID_VALUE.None,
          ].includes(hairColor) ? (
            ''
          ) : (
            <div>
              <p>HAIR COLOR</p>
              <h2>{hairColor}</h2>
            </div>
          )}
          {[
            INVALID_VALUE.NA,
            INVALID_VALUE.Unknown,
            INVALID_VALUE.None,
          ].includes(gender) ? (
            ''
          ) : (
            <div>
              <p>GENDER</p>
              <h2>{gender}</h2>
            </div>
          )}
        </div>
        <div className='modal-footer'>
          <button className='close' onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
