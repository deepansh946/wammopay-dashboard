import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class VerificationCode extends Component {
  state = {};

  render() {
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
                    <input type="tel" id="req" maxlength="1" required />
                  </div>
                  <div className="col">
                    <input type="tel" id="req" maxlength="1" required />
                  </div>
                  <div className="col">
                    <input type="tel" id="req" maxlength="1" required />
                  </div>
                  <div className="col">
                    <input type="tel" id="req" maxlength="1" required />
                  </div>
                  <div className="col">
                    <span>
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
