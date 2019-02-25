import React, { Component } from 'react';
import Axios from 'axios';
import SocialButton from './SocialButton';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { actionSignIn } from '../../actions/index';

import './style.css';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    name: ''
  };

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSocialLoginFailure = err => {
    console.error(err);
    alert('Social Login Error. Please try again');
  };

  handleSocialLogin = user => {
    // console.log('LinkedIn');
    const { email, name } = user.profile;
    // console.log(user.profile);
    Axios({
      method: 'POST',
      url: 'https://blooming-ridge-48458.herokuapp.com/api/users/',
      data: {
        email,
        fullName: name
      }
    })
      .then(res => {
        console.log(res.data);
        const { statusCode } = res.data;
        if (statusCode === 200) {
          this.props.actionSignIn({ Email: email, UserName: name });
          alert('Sign In Successful');
          this.props.history.push('/dashboard');
        } else if (statusCode === 404) {
          alert('User not found');
          this.props.history.push('/sign-up');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  signIn(e) {
    e.preventDefault();

    const { email, password } = this.state;
    console.log(email, password);
    Axios({
      method: 'POST',
      url: '/api/users/sign-in',
      data: {
        email,
        password
      }
    })
      .then(res => {
        console.log(res.data);
        const { statusCode, payload } = res.data;
        if (statusCode === 200) {
          const { email, username } = payload;
          this.props.actionSignIn({ email, username });
          alert('Sign In Successful');
          this.props.history.push('/dashboard');
        } else if (statusCode === 404) {
          alert('User not found');
          this.props.history.push('/sign-up');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    return (
      <div className="template-light">
        {/* Login  */}
        <div className="wrapper wrapper-content--- overflow-hidden">
          <div className="container-login">
            <div className="wpay-logo text-center">
              <img src={'/assets/img/core-img/wpay-logo.png'} alt="" />
            </div>

            {/* Card Area Start */}
            <div className="card-login-area">
              <h1 className="title text-center">Sign In</h1>
              <div className="input-container">
                <label htmlFor="req" className="labelCss">
                  Email
                </label>
                <input
                  type="email"
                  id="req"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  required
                />
              </div>
              <div className="input-container">
                <label htmlFor="pass" className="labelCss">
                  Password
                </label>
                <input
                  type="password"
                  id="pass"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  required
                />
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
                <button onClick={e => this.signIn(e)}>
                  <span>Sign In</span>
                </button>
              </div>
              <SocialButton
                provider="facebook"
                appId="799512287069582"
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure}
              >
                Login with Facebook
              </SocialButton>
              <SocialButton
                provider="google"
                appId="934398712916-12m9poigpmaa5aivk5gjfq4i882oqq8u.apps.googleusercontent.com"
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure}
              >
                Login with Google
              </SocialButton>
              <div className="not-account">
                Don't have an account? <a href="/sign-up">SignUp Here</a>
              </div>
            </div>
            {/* Card Area End */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ actionSignIn }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
