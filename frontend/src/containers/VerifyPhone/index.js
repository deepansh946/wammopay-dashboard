import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Axios from 'axios';

import './style.css';
import readLocalStore from '../../browser/localStoreRead';

class VerifyPhone extends Component {
  state = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    tick: false
  };

  onChangeValue1 = e => {
    this.setState({ value1: e.target.value });
  };

  onChangeValue2 = e => {
    this.setState({ value2: e.target.value });
  };

  onChangeValue3 = e => {
    this.setState({ value3: e.target.value });
  };

  onChangeValue4 = e => {
    this.setState({ value4: e.target.value });
  };

  onChangeValue5 = e => {
    this.setState({ value5: e.target.value });
  };

  onChangeValue6 = e => {
    this.setState({ value6: e.target.value });
  };

  onClickSpan = e => {
    const token = readLocalStore('token');

    console.log(token);

    const { access_token } = token.token;

    const { value1, value2, value3, value4, value5, value6 } = this.state;

    const temp = value1 + value2 + value3 + value4 + value5 + value6 + '';

    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/api/Account/VerifyPhone/' + temp,
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(res => {
        console.log(res.data);

        if (res.data === 'Phone verified successfully.') {
          alert('Phone Verification Done');
          this.props.history.push('/dashboard');
        } else {
          const { Message } = res.data;
          alert(Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { tick } = this.state;

    return (
      <div className="wrapper wrapper-content--- overflow-hidden">
        <div className="container-login">
          <div className="wpay-logo text-center">
            <img src={'assets/img/core-img/wpay-logo.png'} alt="" />
          </div>
          {/* <!-- Card Area --> */}
          <div className="card-login-area">
            <h1 className="title text-center">
              <img src={'assets/img/core-img/verify.png'} alt="" />
              <br />
              <span className="v-span">Verify Phone</span>
            </h1>
            <form>
              <div className="input-container">
                <p className="verify-p text-center">
                  The verification code has been sent
                  <br />
                  to the phone.
                  <br />
                  Please enter the code below.
                </p>
              </div>
              <div className="input-container verify-field">
                <div className="row">
                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value1}
                      onChange={this.onChangeValue1}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value2}
                      onChange={this.onChangeValue2}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value3}
                      onChange={this.onChangeValue3}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value4}
                      onChange={this.onChangeValue4}
                      required
                    />
                  </div>

                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value5}
                      onChange={this.onChangeValue5}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="tel"
                      id="req"
                      maxLength="1"
                      value={this.state.value6}
                      onChange={this.onChangeValue6}
                      required
                    />
                  </div>
                  <div className="col">
                    <span
                      onClick={this.onClickSpan}
                      className={tick ? 'tick' : null}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VerifyPhone)
);
