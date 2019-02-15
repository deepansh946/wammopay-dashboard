import React, { Component } from 'react';
import SocialButton from './SocialButton';

import './style.css';

export default class SignIn extends Component {
  state = {};

  render() {
    return (
      <div className="">
        {/* Login  */}
        <div className="wrapper wrapper-content--- overflow-hidden">
          <div className="container-login">
            <div className="wpay-logo text-center">
              <img src={'/assets/img/core-img/wpay-logo.png'} alt="" />
            </div>

            {/* Card Area Start */}
            <div className="card-login-area">
              <h1 className="title text-center">Sign In</h1>
              <form>
                <div className="input-container">
                  <label htmlFor="req" className="labelCss">
                    Email
                  </label>
                  <input type="email" id="req" required />
                </div>
                <div className="input-container">
                  <label htmlFor="pass" className="labelCss">
                    Password
                  </label>
                  <input type="password" id="pass" name="password" required />
                </div>
                <div className="input-container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="check-field">
                        <input type="checkbox" id="remember" name="horns" />
                        {/* <input type="checkbox" id="remember" /> */}
                        <label htmlFor="remember" className="rememberMe">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6 text-right">
                      <a href="/forget-password" className="foget-pwd">
                        Forget Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="button-container">
                  <button>
                    <span>Sign In</span>
                  </button>
                </div>
                <div className="not-account">
                  Don't have an account? <a href="/sign-up">SignUp Here</a>
                </div>
              </form>
            </div>
            {/* Card Area End */}
          </div>
        </div>
      </div>
    );
  }
}
