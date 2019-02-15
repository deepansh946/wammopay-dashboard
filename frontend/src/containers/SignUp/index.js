import React, { Component } from 'react';
import Axios from 'axios';

export default class SignUp extends Component {
  state = {
    email: '',
    fullName: '',
    mobileNumber: '',
    password: ''
  };

  onChangeEmail(e) {
    // const { field, value } = e.target;
    // console.log(field, value);
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeNumber(e) {
    this.setState({ mobileNumber: e.target.value });
  }

  onChangeName(e) {
    this.setState({ fullName: e.target.value });
  }

  login() {
    console.log('Login Called');
    const { email, fullName, mobileNumber, password } = this.state;
    Axios({
      method: 'POST',
      url: '/api/users/',
      data: {
        email,
        fullName,
        mobileNumber,
        password
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

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
                <input
                  value={this.state.email}
                  type="email"
                  id="email"
                  required
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="input-container">
                <label htmlFor="req">Full Name</label>
                <input
                  type="email"
                  id="fName"
                  required
                  onChange={e => this.onChangeName(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="req">Mobile Number</label>
                <input
                  type="email"
                  id="mobile"
                  required
                  onChange={e => this.onChangeNumber(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  required
                  onChange={e => this.onChangePassword(e)}
                />
              </div>
              <div className="input-container">
                <label htmlFor="cPass">Confirm Password</label>
                <input type="password" id="cPass" name="password" required />
              </div>
              <div className="button-container">
                <button>
                  <span onClick={this.login}>Sign Up</span>
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
