import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Axios from 'axios';
import cookieRead from '../../browser/cookieRead';

import './style.css';

class VerificationCode extends Component {
  state = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    tick: false,
    code: '',
    msgBody: ''
  };

  // componentWillMount() {
  //   const temp = Math.floor(1000 + Math.random() * 9000).toString();

  //   this.setState({ msgBody: temp });

  //   const phoneNumber = cookieRead('phoneNumber');

  //   console.log(phoneNumber, temp);

  //   Axios({
  //     method: 'POST',
  //     url: '/api/twilio/send-code',
  //     data: {
  //       phoneNumber,
  //       msgBody: temp
  //     }
  //   })
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       alert(err);
  //     });
  // }

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
    this.setState({ tick: true });
  };

  onClickSpan = e => {
    const { value1, value2, value3, value4 } = this.state;

    const temp = value1 + value2 + value3 + value4 + '';

    console.log(temp);

    const msgBody = this.state.msgBody;

    console.log(msgBody);

    Axios({
      method: 'POST',
      url: '/api/twilio/verify-code',
      data: {
        code: temp,
        msgBody
      }
    })
      .then(res => {
        console.log(res.data);

        const { statusCode, message } = res.data;
        if (statusCode === 200) {
          this.props.history.push('/dashboard');
        } else {
          alert(message);
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
              <span className="v-span">Verification Code</span>
            </h1>
            <form>
              <div className="input-container">
                <p className="verify-p text-center">
                  The verification code has been sent
                  <br />
                  to the mobile number.
                  <br />
                  Please enter code below.
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
                    <span
                      onClick={this.onClickSpan}
                      className={tick ? 'tick' : null}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="not-account text-center">
                I didn't receive a code? <a href="">Resend Code</a>
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
  )(VerificationCode)
);
