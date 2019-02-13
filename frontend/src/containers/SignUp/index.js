import React, { Component } from 'react';

export default class SignUp extends Component {
  state: {};

  render() {
    return (
      <div className="wrapper wrapper-content--- overflow-hidden">
        <div className="container-login">
          <div className="wpay-logo text-center">
            <img src={'/assets/img/core-img/wpay-logo.png'} alt="" />
          </div>
          {/* Card Area  */}
          <div className="card-login-area">
            <h1 className="title text-center">Sign Up</h1>
            <form>
              <div className="input-container">
                <label htmlFor="req">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="input-container">
                <label htmlFor="req">Full Name</label>
                <input type="email" id="fName" required />
              </div>
              <div className="input-container">
                <label htmlFor="req">Mobile Number</label>
                <input type="email" id="mobile" required />
              </div>
              <div className="input-container">
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="password" required />
              </div>
              <div className="input-container">
                <label htmlFor="cPass">Confirm Password</label>
                <input type="password" id="cPass" name="password" required />
              </div>
              <div className="button-container">
                <button>
                  <span>Sign Up</span>
                </button>
              </div>
              <div className="not-account">
                Already have an account? <a href="/sign-in">Sign In Here</a>
              </div>
            </form>
          </div>

          {/* Card Area  */}
        </div>
      </div>
    );
  }
}
