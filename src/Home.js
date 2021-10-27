import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Navbar from './Navbar'
import Logo from './Logo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Logo />
    </div>
  )
}

export default Home
