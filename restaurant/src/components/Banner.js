import React from 'react'
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content container">
        <h2>Ready to make a reservation?</h2>
        <a href="/booking" className="btn book-table btn-white">Book a table</a>
      </div>   
    </div>
  )
}

export default Banner
