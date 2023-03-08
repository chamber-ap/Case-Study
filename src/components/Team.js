import React from "react";
import Navbar from "./Navbar";
import aman from "../image/aman.jpg";

const Team = () => {
  return (
    <>
      <Navbar />
      <div class="container my-5  text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={aman}
                className="card-img-top object-fit-cover"
                style={{ height: "250px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Mohammed Aman</p>
                <p className="card-text">20112033</p>
              </div>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={aman}
                className="card-img-top object-fit-cover"
                style={{ height: "250px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Mohammed Aman</p>
                <p className="card-text">20112033</p>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={aman}
                className="card-img-top object-fit-cover"
                style={{ height: "250px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Mohammed Aman</p>
                <p className="card-text">20112033</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-5 justify-content-md-center">
          <div class="col-md-auto">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={aman}
                className="card-img-top object-fit-cover"
                style={{ height: "250px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Mohammed Aman</p>
                <p className="card-text">20112033</p>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
          <div className="card" style={{ width: "18rem" }}>
              <img src={aman} className="card-img-top object-fit-cover" style={{height: '250px'}} alt="..." />
              <div className="card-body">
                <p className="card-text">Mohammed Aman</p>
                <p className="card-text">20112033</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
