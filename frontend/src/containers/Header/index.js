import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import cookieRead from '../../browser/cookieRead';

import {
  faSignOutAlt,
  faUser,
  faEnvelope,
  faCog,
  faLifeRing
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { actionSignOut } from '../../actions/index';
import './style.css';

class Header extends Component {
  state = {};

  onSignOut = () => {
    this.props.actionSignOut();
    this.props.history.push('/');
  };

  render() {
    const username = cookieRead('username');
    const email = cookieRead('email');
    return (
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
                      <span>Security alert for your linked Google </span>
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
                  <span className="welcome-user">{username}</span>
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
                        <img src={'assets/img/member-img/women.jpg'} alt="" />
                      </div>
                      {/* <!-- Profile Text --> */}
                      <div className="profile--text-details">
                        <h6>{username}</h6>
                        <span>{email}</span>
                      </div>
                    </div>
                    <a href="#" className="dropdown-item">
                      <FontAwesomeIcon icon={faUser} className={'icon'} />
                      My profile
                    </a>
                    <a href="#" className="dropdown-item">
                      <FontAwesomeIcon icon={faEnvelope} className={'icon'} />
                      Messages
                    </a>
                    <a href="/account-settings" className="dropdown-item">
                      <FontAwesomeIcon icon={faCog} className={'icon'} />
                      Account settings
                    </a>
                    <a href="#" className="dropdown-item">
                      <FontAwesomeIcon icon={faLifeRing} className={'icon'} />
                      Support
                    </a>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={this.onSignOut}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className={'icon'} />
                      {/* <i className="pe-7s-back" aria-hidden="true" /> */}
                      Sign Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({ state });

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
  )(Header)
);
