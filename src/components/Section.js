import React from 'react'
import logo1 from '../image/logo3.jpg';
import { Link } from "react-router-dom";

function Section() {
  return (
    <>
       <div className="position-relative">

        {/* Navigation bar for home  */}
       <nav className="navbar navbar-expand-lg bg-transparent text-dark position-absolute top-0 fs-5" >
            <div className="container-fluid border-3 border-bottom border-dark" style={{paddingBottom: "15px" , paddingLeft: "0px" , paddingRight: "0px" , margin: "0px 13px"}}>
            <Link className="navbar-brand fs-3" to="/">IITR | ChemE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{width:"1320px"}}>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/ccalculator" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    C-Emission Calculator
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/household">HouseHold</Link></li>
                    <li><Link className="dropdown-item" to="/vehicle">Vehicle</Link></li>
                    <li><Link className="dropdown-item" to="/industrial">Industrial</Link></li>
                </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/news">News & Events</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        
       <img src={logo1} className="img-fluid " alt="Responsive"></img>
       <h1 className="position-absolute top-50 fw-bold" style={{marginLeft:"35px"}}>Case study</h1>
       </div>
    </>
  )
}

export default Section