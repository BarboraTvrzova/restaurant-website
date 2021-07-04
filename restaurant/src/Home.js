import React from "react"
import "./Home.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./components/About"
import Offers from "./components/Offers"
import Banner from "./components/Banner"

const Home = () => {
  return (
    <div className="home">
      <Header 
        page="home" heading="Exquisite dining 
        since 1989"
        text="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse." />
      <About />
      <Offers />
      <Banner />
      <Footer />
    </div>
  )
}

export default Home


