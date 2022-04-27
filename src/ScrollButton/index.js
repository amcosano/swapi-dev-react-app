import React, { useState } from 'react'
import './ScrollButton.css'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className='scroll-container'>
      <button
        className='scroll-button'
        style={{ display: visible ? 'inline' : 'none' }}
        onClick={scrollToTop}
      >
        Back to Top!
      </button>
    </div>
  )
}

export default ScrollButton
