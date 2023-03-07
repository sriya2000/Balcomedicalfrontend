import React from 'react'
import Image from '../images/Banner1.jpg'

const MainHeader = () => {
  return (
    <header className="main_header">
        <div className="main_header-image">
          <img src={Image} alt="Header image" />
        </div>
    </header>
  )
}

export default MainHeader