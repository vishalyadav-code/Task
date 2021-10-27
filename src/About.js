import React from 'react'
import Navbar from './Navbar'
import "./About.css"
const About = () => {
  return (
    <>
      <section class='section4'>
        <h1 class='heading'>THIS IS WHO WE ARE</h1>
        <p class='detail'>
          We are an user centric UX studio striving to create intuitive user
          experiences. We have experience working with clients from a wide gamut
          of industry sectors and have created products for almost every digital
          platform.
        </p>

        <div class='section4-container'>
          <div class='box box1'>
            <h1 class='box-heading'>15+</h1>
            <p>Years of</p>
            <p>Digital Experience</p>
          </div>
          <div class='box box2'>
            <h1 class='box-heading'>15+</h1>
            <p>Years of</p>
            <p>Digital Experience</p>
          </div>
          <div class='box box3'>
            <h1 class='box-heading'>15+</h1>
            <p>Years of</p>
            <p>Digital Experience</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
