import React from 'react'
import './Header.css'

export default function Header({ title }) {
  return (
    <header className='header-container'>
      <div className='page-logo'>
        <a href='/'>{title}</a>
      </div>
    </header>
  )
}
