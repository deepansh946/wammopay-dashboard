import React, { Component } from 'react';
import Axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      fullName: '',
      mobileNumber: '',
      password: '',
      isLogin: false
    };
  }

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onChangeNumber = e => {
    this.setState({ mobileNumber: e.target.value });
  };

  onChangeName = e => {
    this.setState({ fullName: e.target.value });
  };

  login = e => {
    e.preventDefault();
    console.log('Login Called');
    const { email, fullName, mobileNumber, password } = this.state;
    console.log(email, fullName, mobileNumber, password);
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
      .then(res => {
        console.log(res.data);
        const { statusCode } = res.data;
        if (statusCode === 200) {
          // this.setState({ isLogin: true });
          alert('You are registered. Please login to continue');
          this.props.history.push('/sign-in');
        } else {
          alert('User Registration Failed. Please try again');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  render() {
    const { email, fullName, mobileNumber, password } = this.state;
    return (
      <div className="template-light">
        <div className="wrapper wrapper-content--- overflow-hidden">
          <div className="container-login">
            <div className="wpay-logo text-center">
              <img src={'/assets/img/core-img/wpay-logo.png'} alt="" />
            </div>
            {/* Card Area  */}
            <div className="card-login-area">
              <h1 className="title text-center">Sign Up</h1>
              <div className="input-container">
                <label htmlFor="req">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={this.onChangeEmail}
                  name="email"
                />
              </div>
              <div className="input-container">
                <label htmlFor="req">Full Name</label>
                <input
                  type="text"
                  id="fName"
                  required
                  onChange={e => this.onChangeName(e)}
                  value={fullName}
                />
              </div>
              <div className="input-container">
                <label htmlFor="req">Mobile Number</label>
                <input
                  type="number"
                  id="mobile"
                  required
                  value={mobileNumber}
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
                  value={password}
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
            </div>

            {/* Card Area  */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
