import React from 'react'
import "./About.css"
import divider from "../images/patterns/divider.svg"

const About = () => {
  return (
    <div className="">
    <div className="about">
      <div className="about-a">
        <div className="about-section container">       
          <div className="pic-container"></div>
          <div className="about-text">         
            <img src={divider} alt="" className="divider"/>
            <h2>Enjoyable place for all the family</h2>
            <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
          </div>
        </div>
      </div>
      <div className="about-b">
        <div className="about-section container">
          <div className="pic-container"></div>
          <div className="about-text">
            <img src={divider} alt="" className="divider"/>
            <h2>The most locally sourced food</h2>
            <p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
          </div>
        </div>
      </div>
      </div>
      
      
      <div className="menu-highlights">
        <div className="menu-content  container">
        <img src={divider} alt="" className="divider"/>
        <div className="menu-text">
          <div className="about-menu">
            <h2>A few highlights from our menu</h2>
            <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
          </div>
          <div className="menu-examples">
            <div className="item">
              <div className="food-img-1 food-img"></div>
              <div className="food-description">
                <h3>Seared Salmon Fillet</h3>
                <p className="small">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
              </div>
            </div>
            <div className="item">
              <div className="food-img-2 food-img"></div>
              <div className="food-description">
                <h3>Rosemary Filet Mignon</h3>
                <p className="small">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
              </div>
            </div>
            <div className="item">
              <div className="food-img-3 food-img"></div>
              <div className="food-description">
                <h3>Summer Fruit Chocolate Mousse</h3>
                <p className="small">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
              </div>
            </div>
          </div>
          </div>
        </div>


      </div>
      
    
    </div>
  )
}

export default About
