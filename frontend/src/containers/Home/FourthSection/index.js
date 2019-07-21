import React from 'react';
import Illustration2Image from '../Assets/Illustrationnext.png';
import './style.css';

export default class Supports extends React.Component {
  render() {
    return (
      <div id="Fourth-Section">
        <div className="Custom-Wrapper4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="img-section3">
                  <img
                    src={Illustration2Image}
                    alt="IllustrationImage"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="content-section3">
                  <h1>Accept payments in less than A minute with WammoPay</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                  <button className="btn btn-success custom-button20">
                    Explore the Stack
                  </button>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
