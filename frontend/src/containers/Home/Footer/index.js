import React from 'react';
import FooterLogo from '../Assets/WammoWhite.png';
import './style.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="Eight-Section">
        <div className="Custom-Wrapper8">
          <div className="container">
            <div className="absoluteContent8">
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-4">
                  <div className="content-section8">
                    <i className="fas fa-paper-plane">
                      <span>United States</span>
                    </i>
                    <br />
                    <i className="fas fa-comment">
                      <span>English</span>
                    </i>
                  </div>
                  <div className="img-manage">
                    <img
                      src={FooterLogo}
                      className="img-fluid"
                      alt="FooterLogo"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="footer-links">
                    <div className="links1">
                      <p>
                        <b>DEVELOPERS</b>
                      </p>
                      <p>Documentation</p>
                      <p>API reference</p>
                      <p>API status</p>
                      <p>Open source</p>
                    </div>
                    <div className="links2">
                      <p>
                        <b>COMPANY</b>
                      </p>
                      <p>About</p>
                      <p>Blog</p>
                      <p>Jobs</p>
                      <p>Press</p>
                    </div>
                    <div className="links3">
                      <p>
                        <b>RESOURCES</b>
                      </p>
                      <p>Support</p>
                      <p>Contact</p>
                      <p>Privacy & terms</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
