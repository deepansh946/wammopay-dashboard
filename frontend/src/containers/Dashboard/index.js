import React, { Component } from 'react';

import cookieRead from '../../browser/cookieRead';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { actionSignOut } from '../../actions/index';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSignOut = () => {
    // console.log(this.props);
    this.props.actionSignOut();
    this.props.history.push('/');
  };

  render() {
    const UserName = cookieRead('username');
    const Email = cookieRead('email');
    return (
      <div className="template-light">
        <div className="main-wrapper" id="mainWrapper">
          {/* <!-- ====== Header Area Start ====== --> */}
          <header className="matmin-header-area d-flex align-items-center justify-content-between header-wrapper">
            {/* <!-- Single Header Content --> */}
            <div className="single-header-content d-flex align-items-center">
              {/* <!-- Logo & Trigger Area --> */}
              <div className="logo-and-trigger-area mr-30 d-flex align-items-center justify-content-between">
                {/* <!-- Logo Area --> */}
                <div className="logo-area">
                  <a href="index-1.html">
                    <img src={'assets/img/core-img/wpay-logo.png'} alt="" />
                  </a>
                </div>
                {/* <!-- Trigger --> */}
                <div className="top-trigger">
                  <span /> <span /> <span />
                </div>
              </div>

              {/* <!-- Left Side Nav --> */}
              <ul className="top-left-side-nav d-flex align-items-center">
                <li className="nav-item">
                  <div className="top-search-bar">
                    <form action="#" method="get">
                      <div className="input-field">
                        <i className="pe-7s-search prefix" />
                        <input
                          type="search"
                          name="search"
                          className="top-search mb-0"
                          placeholder="Type your keywords..."
                        />
                        <button type="submit" className="d-none" />
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>

            {/* <!-- Single Header Content --> */}
            <div className="single-header-content mr-15">
              <div className="user-meta-data d-flex align-items-center">
                {/* <!-- Top Bar Nav --> */}
                <ul className="top-bar-nav d-flex align-items-center">
                  <li className="nav-item dropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="pe-7s-bell" aria-hidden="true" />
                      <span className="active-status pulse" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {/* <!-- Top Message Area --> */}
                      <div className="top-message-area">
                        <a href="/dashboard" className="dropdown-item">
                          <i className="fa fa-envelope-o" />
                          <span className="mes-title">
                            A free 6-hour video course on Angular
                          </span>
                          <span className="mes-sent-time">3 min ago</span>
                        </a>
                        <a href="/dashboard" className="dropdown-item">
                          <i className="fa fa-envelope-o" />
                          <span className="mes-title">
                            Google Ads: You'll get a refund soon
                          </span>
                          <span className="mes-sent-time">27 min ago</span>
                        </a>
                        <a href="/dashboard" className="dropdown-item">
                          <i className="fa fa-envelope-o" />
                          <span className="mes-title">
                            New Feature: HTTP Method Selection
                          </span>
                          <span className="mes-sent-time">56 min ago</span>
                        </a>
                        <a href="/dashboard" className="dropdown-item">
                          <i className="fa fa-envelope-o" />
                          <span className="mes-title">
                            The Complete JavaScript Handbook - the new free book
                          </span>
                          <span className="mes-sent-time">1 hour ago</span>
                        </a>
                        <a href="/dashboard" className="dropdown-item">
                          <i className="fa fa-envelope-o" />
                          <span className="mes-title">
                            New comment: Matmin - Admin Template
                          </span>
                          <span className="mes-sent-time">2 days ago</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="pe-7s-help1" aria-hidden="true" />
                      <span className="active-status pulse" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {/* <!-- Top Notifications Area --> */}
                      <div className="top-notifications-area">
                        <a href="#" className="dropdown-item">
                          <i className="icon_gift_alt" />
                          <span>We've got something for you!</span>
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="icon_error-triangle_alt" />
                          <span>Domain names expiring on Tuesday</span>
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="icon_check" />
                          <span>Your commissions has been sent</span>
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="icon_heart_alt" />
                          <span>You sold an item!</span>
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="icon_error-triangle_alt" />
                          <span>
                            Security alert for your linked Google account
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      type="button"
                      className="btn dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={'assets/img/member-img/women.jpg'} alt="" />
                      <span className="welcome-user">{UserName}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      {/* <!-- User Profile Area --> */}
                      <div className="user-profile-area">
                        <div
                          className="user-intro bg-img d-flex align-items-center"
                          style={{
                            backgroundImage:
                              'url(img/thumbnails-img/profile-bg.jpg)'
                          }}
                        >
                          {/* <!-- Thumb --> */}
                          <div className="profile--thumbnail">
                            <img
                              src={'assets/img/member-img/women.jpg'}
                              alt=""
                            />
                          </div>
                          {/* <!-- Profile Text --> */}
                          <div className="profile--text-details">
                            <h6>{UserName}</h6>
                            <span>{Email}</span>
                          </div>
                        </div>
                        <a href="#" className="dropdown-item">
                          <i className="fa fa-user" aria-hidden="true" /> My
                          profile
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="fa fa-envelope" aria-hidden="true" />
                          Messages
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="fa fa-cog" aria-hidden="true" /> Account
                          settings
                        </a>
                        <a href="#" className="dropdown-item">
                          <i className="fa fa-life-ring" aria-hidden="true" />
                          Support
                        </a>
                        <a
                          href="#"
                          className="dropdown-item"
                          onClick={this.onSignOut}
                        >
                          <i className="fa fa-sign-out" aria-hidden="true" />
                          Sign-out
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {/* <!-- ====== Header Area End ====== -->  */}

          {/* <!-- ====== Settings Panel Area Start ====== -->  */}

          {/* <!-- ==================================
              ******* Page Wrapper Area Start *******
              =================================== --> */}
          <div className="page-wrapper d-flex clearfix">
            {/* <!-- ====== Left Sidebar Area Start ====== --> */}
            <div className="left-sidebar-area">
              {/* <!-- Side Menu Area --> */}
              <div className="side-menu-area">
                {/* <!-- Sidebar Menu --> */}
                <ul className="sidebar-menu" data-widget="tree">
                  <li className="menu-title mb-30 active">
                    <a href="index-1.html">
                      <i className="pe-7s-home homeclick" />
                      <span>
                        Home
                        <br />
                        <small>Active your account</small>
                      </span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a href="/route/payout-setting.html">
                      <i className="pe-7s-credit" />
                      <span>Payment</span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a href="/route/balance.html">
                      <i className="pe-7s-cash" />
                      <span>Balance</span>
                    </a>
                  </li>

                  <li className="menu-title mb-30">
                    <a href="index-1.html">
                      <i className="pe-7s-users" />
                      <span>Customers</span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a href="index-1.html">
                      <i className="pe-7s-note2" />
                      <span>Virtual Terminal</span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a href="index-1.html">
                      <i className="pe-7s-note2" />
                      <span>Billing</span>
                    </a>
                  </li>

                  <li className="menu-title mb-30">
                    <a href="index-1.html">
                      <i className="pe-7s-monitor" />
                      <span>Developers</span>
                    </a>
                  </li>

                  <li className="menu-title mb-30">
                    <a href="http://udwebs.xyz/resources">
                      <i className="pe-7s-download" />
                      <span>Resources</span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a href="index-1.html">
                      <i className="pe-7s-graph3" />
                      <span>Business Settings</span>
                    </a>
                  </li>

                  <li className="menu-title">
                    <a
                      href=""
                      className="dropdown-item"
                      onClick={this.onSignOut}
                    >
                      <i className="pe-7s-back" />
                      <span>Sign-out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- ====== Left Sidebar Area End ====== -->  */}

            {/* <!-- ====== Page Content Area Start ====== --> */}
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

            {/* <!-- ====== Page Content Area End ====== -->  */}
          </div>
          {/* <!-- ==================================
              ******* Page Wrapper Area End *******
              =================================== -->  */}

          {/* <!-- ====== Footer Area Start ====== --> */}
          <footer className="matmin-footer">
            <div className="container-fluid h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  {/* Copywrite Text  */}
                  <div className="copywrite-text d-flex justify-content-between">
                    <p>&copy; 2019 </p>
                    {/* <!-- Nav Style --> */}
                    <div className="footer--nav--style">
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Privacy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* ====== Footer Area End ======   */}
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
