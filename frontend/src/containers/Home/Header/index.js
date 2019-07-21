import React from 'react';
import LogoImg from '../Assets/WammoWhite.png';
import './style.css';

import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  onClickSignIn = () => {
    this.props.history.push('/sign-in');
  };

  onClickSignUp = () => {
    this.props.history.push('/sign-up');
  };

  render() {
    return (
      <div className="sticky-header">
        <div className="">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img src={LogoImg} alt="WammoLogo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="fas fa-align-justify"
                style={{ color: '#ffffff' }}
              />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="mr-auto" />
              <ul className="nav">
                <li className="nav-item">
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.onClickSignIn}
                    >
                      Sign In
                    </button>
                    <button
                      className="btn btn-outline-success"
                      onClick={this.onClickSignUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
