import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About.js'
import Clients from './Clients.js'
import Services from './Services.js'
import Contact from './Contact.js'
import Navbar from './Navbar'
function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/clients'>
              <Clients />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default App
