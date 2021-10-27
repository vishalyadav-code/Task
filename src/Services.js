import React from 'react'
import Navbar from './Navbar'
import './Services.css'
const Services = () => {
  return (
    <>
      <section class='section sec-iconinfo text-center' id='movedown'>
        <div class='container-serv'>
          <header class='title-head m-auto'>
            <h1 class='title text-uppercase'>This is how we do it</h1>
            <p>
              With a team of talented UX/UI designers we follow a <br />
              result oriented and iterative design process for our projects.
            </p>
          </header>
          <div class='row pt-lg-5 pt-md-3'>
            <div class='col-md-3 col-6 mb-md-0 mb-5'>
              <figure class='icon-img'>
                <img
                  src='https://www.neurointeractive.com/images/research-strategy.png'
                  alt='Research and Strategy'
                />
              </figure>
              <h4 class='text-black'>
                We started with <br />
                <strong>
                  Research &amp; <br />
                  Strategy
                </strong>
              </h4>
            </div>
            <div class='col-md-3 col-6 mb-md-0 mb-5'>
              <figure class='icon-img'>
                <img
                  src='https://www.neurointeractive.com/images/define-document.png'
                  alt='Define and Document'
                />
              </figure>
              <h4 class='text-black'>
                Then we move to <br />
                <strong>
                  Define &amp; <br />
                  Document
                </strong>
              </h4>
            </div>
            <div class='col-md-3 col-6'>
              <figure class='icon-img'>
                <img
                  src='https://www.neurointeractive.com/images/design-engineer.png'
                  alt='Design and Engineer'
                />
              </figure>
              <h4 class='text-black'>
                After that we <br />
                <strong>
                  Design &amp; <br />
                  Engineer
                </strong>
              </h4>
            </div>
            <div class='col-md-3 col-6'>
              <figure class='icon-img'>
                <img
                  src='https://www.neurointeractive.com/images/deliver-iterate.png'
                  alt='Deliver and Iterate'
                />
              </figure>
              <h4 class='text-black'>
                And in the end we <br />
                <strong>
                  Deliver &amp; <br />
                  Iterate
                </strong>
              </h4>
            </div>
          </div>
          <div class='text-center mt-5'>
            <a
              href='process.html'
              class='btn btn-lg btn-primary mb-3 text-uppercase'
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
