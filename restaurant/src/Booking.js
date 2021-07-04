import React from 'react'
import "./Booking.css"
import Footer from './components/Footer'
import Header from './components/Header'
import Reservation from './components/Reservation'

const Booking = () => {
  return (
    <div className="booking">
      <Header page="booking" heading="Reservations" text="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."/>
      
      <div className="reservation">
        
          <Reservation />
        
      </div>
      <Footer />
    </div>
  )
}

export default Booking
