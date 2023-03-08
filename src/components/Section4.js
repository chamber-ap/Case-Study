import React from 'react'
import { Link } from "react-router-dom";


export default function Section4() {
  return (
    <>
    
            <div className="contactinfo mb-3" style={{ height: "250px" , padding: "65px 0px"}}>
            <div className="row g-0">
                <div className="col-md-auto">
                <div className="card-body border-end border-dark">
                    <h3 className="card-title">CONTACT</h3>
                    <p className="card-text">Indian Institute ofTechnology, Roorkee (Haridwar) &nbsp; &nbsp;</p>
                </div>
                </div>
                <div className="col-md-auto">
                <div className="card-body border-end border-dark mx-4">
                    <h3 className="card-title">CONNECT &nbsp;</h3>
                    <p className="card-text">IITR Chemical</p>
                </div>
                </div>
                <div className="col-md-auto">
                <div className="card-body ">
                <Link className="nav-link active" aria-current="page" to="/team" >Meet Our Team</Link>
                </div>
                </div>
            </div>
            </div>
            
    </>
  )
}