import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom"
import "./App.css"
import Booking from './Booking'
import Home from "./Home"



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">      
          <Switch>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div> 
    </BrowserRouter>
  )
}

export default App
