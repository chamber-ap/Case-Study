import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import Section4 from './Section4';

function Contact() {
  return (
    <>
      <Navbar />
      <div className=" bg-danger-subtle" >\

        {/* Heading  */}
        <div className="mb-1" style={{ margin: "0px 90px" }}>
        <h1 className="mx-30" style={{ height: "300px" }} ><br />Contact Us<br/>....................................................................................................<br/>....................................................................................................<br/>....................................................................................................</h1>
        </div>

      </div>

      {/* Form  */}
      <div className="mb-3 " style={{ margin: "0px 150px" }}>
          <p style={{ marginTop: "80px" }}>If you would like more information about Chemical Engineering at MIT or have any questions, comment or suggestions about the ChemE website, please fill out the form below.</p>
          <h2>Fill the Form</h2>
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="siri"/>
        </div>
      <div className="mb-3 " style={{ margin: "0px 150px" }}>
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control border border-dark" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3 " style={{ margin: "0px 150px" }}>
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control border border-dark" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>

      {/* Button  */}
      <div className="container d-flex justify-content-center " style={{ marginBottom: "30px" }}>
      <button type="button" class="btn btn-dark">Dark</button>
      </div>

      <Section4/>
      <Footer />
    </>
  )
}

export default Contact