import React from 'react';
import semiColon from '../Assets/semicolon.png';
import avatar from '../Assets/avatar.png';
import LeftMiniArrow from '../Assets/leftArrow.png';
import RightBigArrow from '../Assets/rightArrow.png';
import './style.css';

export default class SpecialQuote extends React.Component {
  render() {
    return (
      <div id="Sixth-Section">
        <div className="Custom-Wrapper6">
          <div className="container">
            <div className="absoluteContent6">
              <h4>
                Special quotes
                <br />
                from our customer about us.
              </h4>
              <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                  <div className="card">
                    <img
                      src={semiColon}
                      alt="dubbleQuotes"
                      className="semi-colon"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <img src={avatar} alt="avatar" className="avatar-img" />
                    <h5>Tarik Eamin</h5>
                    <h6>Project Manager, Pixel Point.</h6>
                  </div>
                  <div className="arrows">
                    <img
                      src={LeftMiniArrow}
                      alt="leftMiniArrow"
                      className="left-arrow"
                    />
                    <img
                      src={RightBigArrow}
                      alt="RightBigArrow"
                      className="right-arrow"
                    />
                  </div>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
