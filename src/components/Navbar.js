import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light top-0 fs-5" >
            <div className="container-fluid border-3 border-bottom border-dark" style={{paddingBottom: "0px" , paddingLeft: "0px" , paddingRight: "0px" , margin: "0px 13px"}}>
            <Link className="navbar-brand fs-3" to="/">IITR | ChemE</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{width:"1066px"}}>
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
  )
}

export default Navbar