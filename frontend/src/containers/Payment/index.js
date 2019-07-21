import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';

import './style.css';

class Payment extends Component {
  state = {};

  render() {
    return (
      <div className="template-light">
        <div className="main-wrapper" id="mainWrapper">
          <Header />
          <div className="page-wrapper d-flex clearfix">
            <SideBar />

            {/* <!-- ====== Page Content Area Start ====== --> */}
            <div className="page-content">
              {/* <!-- Wrapper --> */}
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 payout-setting">
                        <div className="box-header">
                          <h2>Bank Accounts</h2>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div className="account-no mb-50">
                            {/* <i className="fa fa-bank" /> */}
                            <FontAwesomeIcon
                              icon={faUniversity}
                              className={'icon'}
                            />
                            <span className="">
                              BNY MELLON-BPS (US)•••• 4930 /031100157
                            </span>
                            <div className="set-edit">
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#exportModal"
                                className="btn btn-outline-primary btn-round-holo"
                              >
                                Edit
                              </button>
                            </div>
                          </div>
                          <p>
                            Charges for a currency without a bank account will
                            be converted to your default currency, USD.
                            <a href="">Which currencies can I charge in?</a>
                          </p>
                        </div>
                      </div>

                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 payout-setting set-sec">
                        <div className="box-header">
                          <h3>Payout schedule</h3>
                          <p>
                            Set a schedule to automatically receive payouts, or
                            send manual payouts via the API or dashboard.
                            <a href="">Learn more</a>
                          </p>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div className="mb-30">
                            <label>
                              <input
                                className="with-gap"
                                name="group1"
                                type="radio"
                              />
                              <span>Automatic every</span>
                            </label>

                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Day
                              </button>
                              <div
                                className="dropdown-menu"
                                x-placement="bottom-start"
                                style={{
                                  position: 'absolute',
                                  willChange: 'transform',
                                  top: '0px',
                                  left: '0px',
                                  transform: 'translate3d(0px, 41px, 0px)'
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  Week
                                </a>
                                <a className="dropdown-item" href="#">
                                  Month
                                </a>
                                <a className="dropdown-item" href="#">
                                  Year
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="mb-30">
                            <label>
                              <input
                                className="with-gap"
                                name="group1"
                                type="radio"
                              />
                              <span>
                                Manual — You’ll no longer be able to see which
                                transactions are bundled in a payout.
                              </span>
                            </label>
                          </div>

                          <div className="text-right">
                            <button
                              type="button"
                              className="btn btn-primary btn-round"
                            >
                              Close
                            </button>
                            &nbsp;&nbsp;
                            <button
                              type="button"
                              className="btn btn-secondary btn-round"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
  )(Payment)
);
