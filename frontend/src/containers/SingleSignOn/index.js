import React, { Component } from 'react';
import Axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { actionSignOn } from '../../actions/index';

import './style.css';
import { debug } from 'util';
import readCookie from '../../browser/cookieRead';

class SingleSignOn extends Component {
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

  componentWillMount() {
    const email = readCookie('email');

    this.setState({ email: email });
  }

  signOn(e) {
    e.preventDefault();

    const { email, password } = this.state;

    console.log('Hi', email, password);

    Axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: 'https://api.wammopay.com/Token',
      data: `grant_type=password&username=${email}&password=${password}`
    })
      .then(res => {
        console.log('Token');
        console.log(res.data);

        const token = res.data;

        const { access_token } = token;

        Axios({
          method: 'POST',
          url: '/api/users/save-token',
          data: {
            email,
            access_token
          }
        })
          .then(res => {
            console.log(res);

            const { statusCode } = res.data;
            if (statusCode === 200) {
              this.props.actionSignOn({ token });
              this.props.history.push('/dashboard');
            }
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    console.log(this.props);
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
              <h1 className="title text-center">Single Sign On</h1>
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
                <button onClick={e => this.signOn(e)}>
                  <span>Sign In</span>
                </button>
              </div>
              <div className="not-account mt-2">
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
  bindActionCreators({ actionSignOn }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleSignOn)
);
