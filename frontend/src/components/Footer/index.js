import React, { Component } from 'react';

class Footer extends Component {
  state = {};

  render() {
    return (
      <footer className="matmin-footer">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="copywrite-text d-flex justify-content-between">
                <p>&copy; 2019 </p>
                <div className="footer--nav--style">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
