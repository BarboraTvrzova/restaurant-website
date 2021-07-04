import React from 'react'
import logo from "../images/logo.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-content container">
        <div className="logo">
          <img src={logo} alt="" className="logo"/>
        </div>
        <div className="footer-info">  
          <div className="address caps normal">
            <ul>
              <li>Marthwaite, Sedbergh</li>
              <li>Cumbria</li>
              <li>+00 44 123 4567</li>
            </ul>
          </div>
          <div className="opening caps normal">
            Open times:
            <ul>
              <li> MON - FRI: 09:00 AM - 10:00 PM</li>
              <li>SAT - SUN: 09:00 AM - 11:30 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
