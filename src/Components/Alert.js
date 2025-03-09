import React, { useState } from "react";
import Navbar from "./Nav";
import img from "./1664713926841.jpeg";

const Alert = () => {
    return (
        <div className="alert-container">
            <Navbar />
            <h1>Alerts</h1>
            <img className="alt-img" src={img} alt="Alert" />
            <div className="content-container">
        <div className="cards-container">
          <div className="alert-card">Alert 1
            <p>Alert Description</p>
          </div>
          <div className="alert-card">Alert 2
          <p>Alert Description</p>
          </div>
          <div className="alert-card">Alert 3
          <p>Alert Description</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Alert;