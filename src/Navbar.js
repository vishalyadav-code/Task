import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Navbar.css'
import { Container, Row, Col } from 'reactstrap'
const Navbar = () => {
  return (
    <Container className='container-fluid main'>
      <Row className='row'>
        <Col col-md-2="true">
          <Link to='/'>Home</Link>
        </Col>
        <Col col-md-2="true">
          <Link to='/About'>About</Link>
        </Col>
        <Col col-md-2="true">
          <Link to='/Contact'>Contact</Link>
        </Col>
        <Col col-md-2="true">
          <Link to='/Clients'>Clients</Link>
        </Col>
        <Col col-md-2="true">
          <Link to='/Services'>Services</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
