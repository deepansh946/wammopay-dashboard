import React, { Component } from 'react';

import SideBar from '../../components/SideBar';
import Header from '../Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { actionSignOut } from '../../actions/index';
import Footer from '../../components/Footer';
import readLocalStore from '../../browser/localStoreRead';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const token = readLocalStore('token');

    if (!token) {
      this.props.history.push('/sign-in');
    }
  }

  onSignOut = () => {
    // console.log(this.props);
    this.props.actionSignOut();
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    return (
      <div className="template-light">
        <div className="main-wrapper" id="mainWrapper">
          <Header />

          <div className="page-wrapper d-flex clearfix">
            <SideBar />

            <div className="page-content">
              {/* <!-- Wrapper --> */}
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 wel-box">
                        <div className="box-header- mb-30">
                          <div className="box-tools pull-right">
                            <button
                              type="button"
                              className="btn button-box-tool"
                              data-widget="remove"
                            >
                              <i className="pe-7s-close" />
                            </button>
                          </div>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div>
                            <div className="ibox-title mb-30">
                              <h5 className="box-title">
                                Welcome to WammoPay!
                              </h5>
                              <p>
                                Here are a few quick links to help you start
                                accepting payment.
                              </p>
                            </div>
                            {/* <!-- Ibox Content --> */}
                            <div className="ibox-content wel-content ">
                              <div className="row">
                                <div className="col-md-4">
                                  <img
                                    src={'assets/img/core-img/Group 110.svg'}
                                    alt=""
                                  />
                                  <span className="wel-link">
                                    <a href="">Get your API keys</a>
                                  </span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    src={'assets/img/core-img/Group 112.svg'}
                                    alt=""
                                  />
                                  <span className="wel-link">
                                    <a href="">
                                      Get help by chat, phone or email
                                    </a>
                                  </span>
                                </div>
                                <div className="col-md-4"> </div>
                              </div>
                              <div className="row">
                                <div className="col-md-4">
                                  <img
                                    src={'assets/img/core-img/Group 111.svg'}
                                    alt=""
                                  />
                                  <span className="wel-link">
                                    <a href="">Active your account</a>
                                  </span>
                                </div>
                                <div className="col-md-4">
                                  <img
                                    src={'assets/img/core-img/Group 113.svg'}
                                    alt=""
                                  />
                                  <span className="wel-link">
                                    <a href="">Read API docs</a>
                                  </span>
                                </div>
                                <div className="col-md-4"> </div>
                              </div>
                              <p className="mt-30">
                                Don't want to write your own integration?
                                <a href="">Pick a pre-built solution</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-9">
                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 wel-box">
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div>
                            <div className="row ">
                              <div className="col-md-6">
                                <h6>
                                  Total <strong>$0.00</strong>
                                </h6>
                                <a
                                  href="#"
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  1st Jan, 2019
                                </a>
                                <div
                                  className="dropdown-menu"
                                  x-placement="bottom-start"
                                  style={{
                                    position: 'absolute',
                                    transform: 'translate3d(0px, 41px, 0px)',
                                    top: '0px',
                                    left: '0px',
                                    willChange: 'transform'
                                  }}
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </div>
                                <span>$0.00</span>
                              </div>
                              <div className="col-md-6 text-right">
                                <button
                                  type="button"
                                  className="btn btn-outline-primary btn-round-holo dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Gross Volume
                                </button>
                                <div
                                  className="dropdown-menu"
                                  x-placement="bottom-start"
                                  style={{
                                    position: 'absolute',
                                    transform: 'translate3d(0px, 41px, 0px)',
                                    top: '0px',
                                    left: '0px',
                                    willChange: 'transform'
                                  }}
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item" href="#">
                                    Separated link
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Ibox Content --> */}
                            <div
                              className="ibox-content mt-30"
                              style={{ height: '160px' }}
                            >
                              <canvas id="blankChart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-3">
                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 amt-box">
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div>
                            {/* <!-- Ibox Content --> */}
                            <div className="ibox-content amt-content ">
                              <div className="row">
                                <div className="col-12 text-center ">
                                  <div className="amt-first amt-blank">
                                    <h3>
                                      <span className="text-green">
                                        <i className="arrow_up-down_alt" />
                                      </span>
                                      $0.00
                                    </h3>
                                    <h5>Deposit Payout</h5>
                                  </div>
                                </div>
                                <div className="col-12 text-center ">
                                  <div className="amt-last amt-blank">
                                    <h3>
                                      <span className="text-green">
                                        <i className="arrow_up-down_alt" />
                                      </span>
                                      $0.00
                                    </h3>
                                    <h5>Expected Payout</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 wel-box">
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div>
                            <div className="ibox-title mb-30">
                              <h6 className="box-title">Analytics</h6>
                            </div>
                            {/* <!-- Ibox Content --> */}
                            <div className="row ">
                              <div className="col-md-12">
                                <div className="mb-30">
                                  <ul className="cusTab">
                                    <li className="tab-item">
                                      <a href="#" id="lightVersion">
                                        1W
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                      >
                                        4W
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="leftVersion"
                                        data-filter="filter 2"
                                      >
                                        1Y
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a href="#" id="lightVersion">
                                        Mtd
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                      >
                                        Qtd
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="leftVersion"
                                        data-filter="filter 2"
                                      >
                                        Ytd
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="leftVersion"
                                        data-filter="filter 2"
                                      >
                                        All
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="cusTab">
                                    <li className="tab-item">
                                      <a href="#" id="lightVersion">
                                        01 January, 2019
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                      >
                                        10 January, 2019
                                      </a>
                                    </li>
                                  </ul>
                                  <ul className="cusTab">
                                    <li className="tab-item">
                                      <a href="#" id="lightVersion">
                                        Hourly
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                      >
                                        Daily
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-6 text-right" />
                            </div>
                            {/* <!-- Ibox Content --> */}
                            <div
                              className="ibox-content mt-30"
                              style={{ height: '200px' }}
                            >
                              <canvas id="blankChart" />
                            </div>
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      actionSignOut
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
