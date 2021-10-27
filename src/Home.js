import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './Navbar'
import Logo from './Logo'
import About from "./About"
import Contact from './Contact'
import Service from './Services'
const Home = () => {
  return (
    <div>
      <Logo />
      <About/>
      <Service/>
      <Contact text="Contact us"/>
    </div>
  )
}

export default Home
