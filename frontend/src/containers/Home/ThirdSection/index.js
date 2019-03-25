import React from 'react';
import Illustrationnext from '../Assets/Illustration.png';
import './style.css';

export default class Developers extends React.Component {
  render() {
    return (
      <div id="Third-Section">
        <div className="Custom-Wrapper3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="content-section2">
                  <h1>
                    Toolkit
                    <br /> for Internet Business
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="img-section2">
                  <img
                    src={Illustrationnext}
                    alt="illustrationnext"
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
