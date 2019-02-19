import React, { Component } from 'react';

class SideBar extends Component {
  state = {};

  render() {
    return (
      <div className="left-sidebar-area">
        <div className="side-menu-area">
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
              <a href="/virtual-terminal">
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
              <a href="" className="dropdown-item" onClick={this.onSignOut}>
                <i className="pe-7s-back" />
                <span>Sign-out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
