import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Axios from 'axios';

import './style.css';
import readLocalStore from '../../browser/localStoreRead';

class VerifiyEmail extends Component {
  state = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    tick: false,
    email: '',
    modal: false
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

  onChangeEmail = e => {
    this.setState({ email: e.target.value });
  };

  onClickSpan = e => {
    const token = readLocalStore('token');

    // console.log(token);

    const { access_token } = token.token;

    console.log(access_token);
    const { value1, value2, value3, value4, value5, value6 } = this.state;

    const temp = value1 + value2 + value3 + value4 + value5 + value6 + '';

    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/api/Account/VerifyEmail/' + temp,
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(res => {
        console.log(res.data);

        if (res.data === 'Email verified successfully.') {
          alert('Email Verification Done');
          this.props.history.push('/verify-phone');
        } else {
          const { Message } = res.data;
          alert(Message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  sendCode = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    const { email } = this.state;

    Axios({
      url: `https://api.wammopay.com/api/Account/GetTWACode/${email}/email`,
      method: 'GET'
    })
      .then(res => {
        console.log(res.data);

        const { value1, value2, value3, value4, value5, value6 } = this.state;

        const temp = value1 + value2 + value3 + value4 + value5 + value6 + '';

        Axios({
          url: `https://api.wammopay.com/api/Account/GetTWAToken/${email}/email/${temp}`,
          method: 'GET'
        })
          .then(res => {
            console.log(res.data);
            alert('Email Verification Done');
            this.props.history.push('/verify-phone');
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { tick, email } = this.state;

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
              <span className="v-span">Verify Email</span>
            </h1>
            <form>
              <div className="input-container">
                <p className="verify-p text-center">
                  The verification code has been sent
                  <br />
                  to the email.
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

            <div className="not-account text-center">
              I didn't receive a code?
              <a
                onClick={this.toggle}
                style={{
                  cursor: 'pointer'
                }}
              >
                Resend Code
              </a>
            </div>

            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              {/* <ModalHeader toggle={this.toggle}>Resend Email Code</ModalHeader> */}
              <ModalBody>
                <div className="row mb-20">
                  <div className="col-xl-6 col-md-6 col-sm-12">
                    <div className="row form-r">
                      <div className="col-md-4">
                        <label>Email</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form"
                          name="email"
                          value={email}
                          placeholder="Enter the Email"
                          onChange={this.onChangeEmail}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.sendCode}>
                  Send Code
                </Button>
              </ModalFooter>
            </Modal>
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
  )(VerifiyEmail)
);
