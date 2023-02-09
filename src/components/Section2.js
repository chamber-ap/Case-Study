import React from 'react'
import gp from '../image/greenpremium.jpg'
import cf from '../image/carbonfoot.jpg'
import ev from '../image/ev.jpg'
import ht from '../image/heataspects.jpg'
import ipt from '../image/impacts.jpg'
import initiative from '../image/initiative.jpg'
import { Link } from "react-router-dom";


export default function Section2() {
  return (
    <>
    <div className="container my-1">
    <div className="card-group1 row">
        <div className="card text-bg-dark col"   style={{margin: '10px',padding: '0px'}} >
        <img src={cf} className="card-img"  alt="..."/>
        <div className="card-img-overlay">
            {/* <h3 className="card-title text-center text-black">Carbon Footprint</h3> */}
            <Link className="nav-link active" aria-current="page" to="/footprint" ><h3>Carbon Footprint</h3></Link>
            <p className="card-text text-black">“The Earth started to rebel when the carbon in the atmosphere began to swell.”</p> 
            <p className="card-text text-black">“A person or organization's garbage reflects their economic footprint.” “Count your footprints; carbon ones.”</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark col"  style={{margin: '10px',padding: '0px'}} >
        <img src={ipt} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            {/* <h3 className="card-title text-center text-black">Impacts</h3> */}
            <Link className="nav-link active" aria-current="page" to="/impacts" ><h3>Impacts</h3></Link>
            <p className="card-text text-black">The negative effects that result from the release of carbon dioxide and other greenhouse gases </p>
            
        </div>        
        </div>
        <div className="card text-bg-dark col"  style={{margin: '10px',padding: '0px'}}  >
        <img src={gp} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            {/* <h3 className="card-title text-center text-black">Green Premium</h3> */}
            <Link className="nav-link active" aria-current="page" to="/gp" ><h3>Green Premium</h3></Link>
            <p className="card-text text-black">The additional cost of choosing a clean technology over one that emits more greenhouse gases.</p>
            
        </div>        
        </div>
    </div>
    </div>

    <div className="container">
    <div className="card-group2 row">
        <div className="card text-bg-dark col"  style={{margin: '10px',padding: '0px'}}  >
        <img src={ev} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            {/* <h3 className="card-title text-center text-black">Electric Vehicle</h3> */}
            <Link className="nav-link active" aria-current="page" to="/ev" ><h3>Electric Vehicle</h3></Link>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark col"  style={{margin: '10px',padding: '0px'}}  >
        <img src={ht} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            {/* <h3 className="card-title text-decoration-underline text-center text-white">Heat aspects of EV</h3> */}
            <Link className="nav-link active" aria-current="page" to="/ht" ><h3>Heat aspects of EV</h3></Link>
            <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>

        <div className="card text-bg-dark col"   style={{margin: '10px',padding: '0px'}}  >
        <img src={initiative} className="card-img" alt="..."/>
        <div className="card-img-overlay">
             {/* <h3 className="card-title text-decoration-underline text-center text-black">Initiative</h3> */}
             <Link className="nav-link active" aria-current="page" to="/initiatives" ><h3>Initiatives</h3></Link>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
    </div>
    </div>
    
    </>
  )
}