import React from 'react'
import Navbar from './Navbar'
import "./Contact.css"
const Contact = (props) => {
  return (
    <>
      <h3 className="contact-head">{props.text  || "Contact Us"}</h3>
      <form name="contact_us_form" id="contact_us_form" method="POST" autocomplete="off">
          <div class="contact-form">
						<div class="form-group">
							<input type="text" class="form-control char" name="name" id="name" maxlength="50" placeholder="Your Name*"/>
							<span id="name-group" class="er"></span>
						</div>
						<div class="form-group">
							<input type="text" class="form-control" name="email" id="email" placeholder="Your Email*"/>
							<span id="email-group" class="er text-danger"></span>
						</div>
						<div class="form-group">
							<input type="tel" class="form-control numb" name="mobile" id="mobile" maxlength="10" placeholder="Phone Number*"/>
							<span id="mobile-group" class="er text-danger"></span>
						</div>
						<div class="form-group">
							<textarea class="form-control" name="message" id="ContactMessage" placeholder="Your Message*"></textarea>
							<span id="message-group" class="er"></span>
						</div>
						<div class="form-group text-center">
							<input type="submit" class="btn btn-lg btn-primary text-uppercase" value="Submit" id="submit_btn"/>
						</div>
					</div>
				 </form>
    </>
  )
}

export default Contact
