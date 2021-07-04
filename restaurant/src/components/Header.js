import React from 'react'
import "./Header.css"
import logo from "../images/logo.svg"

const Header = ({page,heading,text}) => {
  return (
    <div className={`header-${page}`}>
       
      <div className="header container">
        <div className={`bg-${page}`}>
        </div>
        <a href="/"><img src={logo} alt=""/></a>
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
          <a className={page==="home" ? "btn book-table btn-white" : "none"} href="/booking">Book a table</a>
        </div>
      </div>
    </div>
  )
}

export default Header
