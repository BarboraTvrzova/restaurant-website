import React,{useState} from 'react'
import "./Offers.css"
import pic1 from "../images/homepage/family-gathering-desktop@2x.jpg"
import pic2 from "../images/homepage/special-events-desktop@2x.jpg"
import pic3 from "../images/homepage/social-events-desktop@2x.jpg"


const offers = [
  {
    img:pic1,
    h2:"Family gathering",
    p:"We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    id:1
  },
  {
    img:pic2,
    h2:"Special events",
    p:"Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    id:2
  },
  {
    img:pic3,
    h2:"Social events",
    p:"Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    id:3
  }
]

const Offers = () => {
  const [active, setActive] = useState(1)

  const showOffer = offers.map((offer)=>{
    if (offer.id === active) {
      return (
        <div key={offer.id} className="offers-content container">
          <div className="offers-pic">
            <img src={offer.img} alt=""/>
          </div>
          <div className="text">
            <h2>{offer.h2}</h2>
            <p>{offer.p}</p>
            <a href="/booking" className="btn book-table btn-black">Book a table</a>
            <ul className="options">
              <li onClick={()=>{setActive(1)}} className={active===1? "active" : ""} >Family gathering</li>
              <li onClick={()=>{setActive(2)}} className={active===2?"active":""}>Special events</li>
              <li onClick={()=>{setActive(3)}} className={active===3?"active":""}>Social events</li>
            </ul>
          </div>
        </div>
      )
    } else {
      return null
    }
  })

  return (
    <div className="offers">
      {showOffer}
    </div>
  )
}

export default Offers
