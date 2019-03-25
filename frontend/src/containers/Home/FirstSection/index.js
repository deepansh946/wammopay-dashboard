import React from 'react';
import Navbar from '../Header/index.js';
import LaptopImage from '../Assets/Laptop.png';
import './style.css';

export default class Banner extends React.Component {
  render() {
    return (
      <div id="First-Section">
        <Navbar />
        <div className="Custom-Wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="content-section">
                  <h1>New standard in online payments</h1>
                  <p>
                    Wammo is the best software platform for running an internet
                    business. We handle billions of dollars every year for
                    forward-thinking businesses around the world.
                  </p>
                  <button className="btn btn-success custom-button">
                    Explore the Stack
                  </button>
                  <button className="btn btn-success custom-button2">
                    Create Account
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-section">
                  <img
                    src={LaptopImage}
                    alt="LaptopImage"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
