import React, { Component } from 'react';

import SideBar from '../../components/SideBar';
import Header from '../Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { actionSignOut, actionSignOn } from '../../actions/index';
import Footer from '../../components/Footer';
import readLocalStore from '../../browser/localStoreRead';

import GrossVolume from './Charts/Analytics/GrossVolume';
import TransactionAmount from './Charts/Analytics/TransactionAmount';
import TransactionCount from './Charts/Analytics/TransactionCount';

import TodayGrossCharts from './Charts/TodayCharts/GrossVolume';
import TodayTransactionAmountCharts from './Charts/TodayCharts/TransactionAmount';
import TodayTransactionCountCharts from './Charts/TodayCharts/TransactionCount';

import Axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

class Dashboard extends Component {
  state = {
    grossDataTodayChart: [],
    transactionCountTodayChart: [],
    transactionAmountTodayChart: [],
    dropDownValue: 'Gross Volume',
    startDate: new Date(),
    date: new Date(Date.now() - 86400000),
    interval: 'Daily',
    span: 2
  };

  onDropDownChange = e => {
    this.setState({ dropDownValue: e.target.text });
  };

  onChangeInterval = e => {
    // console.log(e.target.text);
    this.setState({ interval: e.target.text });
  };

  onChangeSpan = e => {
    const value = e.target.text;

    console.log(this.state.span);
    console.log(value);

    if (value === '1W') this.setState({ span: 2 });
    else if (value === '4W') this.setState({ span: 3 });
    else if (value === '1Y') this.setState({ span: 4 });
    // console.log(e.target.text);
  };

  handleChange = e => {
    this.setState({ date: e }, () => {
      // console.log(this.state.date);
    });
  };

  generateToken() {
    Axios({
      method: 'POST',
      url: 'https://api.wammopay.com/Token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: `grant_type=password&username=deepansh940@gmail.com&password=111@aaaA`
    })
      .then(res => {
        // console.log(res.data);

        const token = res.data;

        console.log(token);

        this.props.actionSignOn({ token });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillMount() {
    const key = {
      access_token:
        'AXGs_mmERacLbpyICO2McwhWRDI629nvXj81Yh2fv2AAbceDC7-052LXIZh4QbzfFintX-W0rZXs6Of7LGnNgi15O6raA4qlYNid0Lf6hERcRQcLUJqHBXcsDT_fSBCje9gKNXwV_peSqMUsWI5t2ynNyswLEkwKcp_3Zj02-3G9isa5GBBOL1RKkm7gzqoz0pw2Fpwnk_B7zewne2JbX3XPQdUOAwRqrVnAEO1i-4DDhAkHFVhgZHr0fduNXfBAeohXBtBm5JaTuYIYpoDf5cSg0_vMXuYKiDWhaVw15TKq_KFcvPvK_8-jyqCwahER2vdLX8DPBB7_An3Y68G0DEm19jnFFD0SgYn9Es78pOdHj3-2tEMocpjcKs0K0P9XWOs9zHTQhFnmcJWxtTT86zAmH7ftjCL_vTcQkA0oWSu9_XrhV0sQiVKQk_NVrvdCulPMmuWeoq95RqONIM7hFyV3FzKhYvVKMzGROH_VA5D-4xFgXrX3kWfN_OpQ8oph752iLzGPoASNBEKrMVKyww',
      token_type: 'bearer',
      expires_in: 1209599,
      userName: 'deepansh940@gmail.com',
      '.issued': 'Sat, 16 Mar 2019 12:23:55 GMT',
      '.expires': 'Sat, 30 Mar 2019 12:23:55 GMT'
    };

    this.props.actionSignOn({ token: key });

    const token = readLocalStore('token');

    const { access_token } = token.token;

    if (!access_token) {
      this.props.history.push('/sign-in');
    }

    let { date, startDate } = this.state;

    let compareDate =
      startDate.getFullYear() +
      '-' +
      (startDate.getMonth() + 1) +
      '-' +
      startDate.getDate();

    let fromDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    // console.log('Mount');
    // console.log(fromDate + 'T00:00:00');
    // console.log(fromDate + 'T23:59:59');
    // console.log(compareDate + 'T00:00:00');
    // console.log(compareDate + 'T23:59:59');

    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/v1/dashboard/getanalytics',
      params: {
        fromDate: fromDate + 'T00:00:00',
        toDate: fromDate + 'T23:59:59',
        interval: 'Hour',
        compareFromDate: compareDate + 'T00:00:00',
        compareToDate: compareDate + 'T23:59:59'
      },
      // data: '',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(res => {
        const apiData = res.data;

        const {
          GrossAmountAnalytics,
          TransactionAmountAnalytics,
          TransactionCountAnalytics
        } = apiData['Data'].Data;

        // console.log(GrossAmountAnalytics);
        // console.log('--------------');
        // console.log(TransactionAmountAnalytics);
        // console.log('--------------');
        // console.log(TransactionCountAnalytics);

        // Gross Amount Analytics

        let newDataCurrent = GrossAmountAnalytics['CurrentData'];

        const grossVolumeAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            grossVolumeA: key.Total
          };
        });

        let newDataPast = GrossAmountAnalytics['PastData'];

        const grossVolumeBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalGrossData = grossVolumeAData.map(key => {
          return {
            ...key,
            grossVolumeB: grossVolumeBData[i++]
          };
        });

        // Transaction Amount Analytics

        newDataCurrent = TransactionAmountAnalytics['CurrentData'];

        const transactionAmountAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            transactionAmountA: key.Total
          };
        });

        newDataPast = TransactionAmountAnalytics['PastData'];

        const transactionAmountBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalTransactionAmountData = transactionAmountAData.map(key => {
          return {
            ...key,
            transactionAmountB: transactionAmountBData[i++]
          };
        });

        // Transaction Count Analytics

        newDataCurrent = TransactionCountAnalytics['CurrentData'];

        const transactionCountAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            transactionCountA: key.Total
          };
        });

        newDataPast = TransactionCountAnalytics['PastData'];

        const transactionCountBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalTransactionCountData = transactionCountAData.map(key => {
          return {
            ...key,
            transactionCountB: transactionCountBData[i++]
          };
        });

        this.setState({
          grossDataTodayChart: finalGrossData,
          transactionAmountTodayChart: finalTransactionAmountData,
          transactionCountTodayChart: finalTransactionCountData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.state);
    // console.log(nextState);
    // debugger;
    if (this.state === nextState) return false;
    return true;
  }

  componentDidUpdate() {
    const token = readLocalStore('token');

    const { access_token } = token.token;

    let { date, startDate } = this.state;

    let compareDate =
      startDate.getFullYear() +
      '-' +
      (startDate.getMonth() + 1) +
      '-' +
      startDate.getDate();

    let fromDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    console.log('Update');

    console.log(fromDate + 'T00:00:00');
    console.log(fromDate + 'T23:59:59');
    console.log(compareDate + 'T00:00:00');
    console.log(compareDate + 'T23:59:59');

    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/v1/dashboard/getanalytics',
      params: {
        fromDate: fromDate + 'T00:00:00',
        toDate: fromDate + 'T23:59:59',
        interval: 'Hour',
        compareFromDate: compareDate + 'T00:00:00',
        compareToDate: compareDate + 'T23:59:59'
      },
      // data: '',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(res => {
        const apiData = res.data;

        const {
          GrossAmountAnalytics,
          TransactionAmountAnalytics,
          TransactionCountAnalytics
        } = apiData['Data'].Data;

        // console.log(GrossAmountAnalytics);
        // console.log('--------------');
        // console.log(TransactionAmountAnalytics);
        // console.log('--------------');
        // console.log(TransactionCountAnalytics);

        // Gross Amount Analytics

        let newDataCurrent = GrossAmountAnalytics['CurrentData'];

        const grossVolumeAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            grossVolumeA: key.Total
          };
        });

        let newDataPast = GrossAmountAnalytics['PastData'];

        const grossVolumeBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalGrossData = grossVolumeAData.map(key => {
          return {
            ...key,
            grossVolumeB: grossVolumeBData[i++]
          };
        });

        // Transaction Amount Analytics

        newDataCurrent = TransactionAmountAnalytics['CurrentData'];

        const transactionAmountAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            transactionAmountA: key.Total
          };
        });

        newDataPast = TransactionAmountAnalytics['PastData'];

        const transactionAmountBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalTransactionAmountData = transactionAmountAData.map(key => {
          return {
            ...key,
            transactionAmountB: transactionAmountBData[i++]
          };
        });

        // Transaction Count Analytics

        newDataCurrent = TransactionCountAnalytics['CurrentData'];

        const transactionCountAData = newDataCurrent.map(key => {
          return {
            name: key.Date.slice(11, 16),
            transactionCountA: key.Total
          };
        });

        newDataPast = TransactionCountAnalytics['PastData'];

        const transactionCountBData = newDataPast.map(key => key.Total);

        var i = 0;

        const finalTransactionCountData = transactionCountAData.map(key => {
          return {
            ...key,
            transactionCountB: transactionCountBData[i++]
          };
        });

        this.setState({
          grossDataTodayChart: finalGrossData,
          transactionAmountTodayChart: finalTransactionAmountData,
          transactionCountTodayChart: finalTransactionCountData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSignOut = () => {
    // console.log(this.props);
    this.props.actionSignOut();
    this.props.history.push('/');
  };

  render() {
    const {
      grossDataTodayChart,
      transactionAmountTodayChart,
      transactionCountTodayChart,
      dropDownValue,
      startDate,
      date,
      interval
    } = this.state;

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
                                  Today <strong>$0.00</strong>
                                </h6>
                                <DatePicker
                                  selected={date}
                                  onChange={this.handleChange}
                                  excludeDates={[startDate]}
                                  dateFormat="MMMM d, yyyy"
                                  value={date.toString().slice(4, 15)}
                                />
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
                                  {dropDownValue}
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
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={this.onDropDownChange}
                                  >
                                    Gross Value
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={this.onDropDownChange}
                                  >
                                    Transaction Amount
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={this.onDropDownChange}
                                  >
                                    Transaction Count
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="ibox-content mt-30"
                              style={{ height: '160px' }}
                            >
                              {dropDownValue === 'Gross Volume' ? (
                                <TodayGrossCharts
                                  chartData={grossDataTodayChart}
                                />
                              ) : dropDownValue === 'Transaction Amount' ? (
                                <TodayTransactionAmountCharts
                                  chartData={transactionAmountTodayChart}
                                />
                              ) : (
                                <TodayTransactionCountCharts
                                  chartData={transactionCountTodayChart}
                                />
                              )}
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
                                      <a
                                        href="#"
                                        id="lightVersion"
                                        onClick={this.onChangeSpan}
                                      >
                                        1W
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                        onClick={this.onChangeSpan}
                                      >
                                        4W
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="leftVersion"
                                        data-filter="filter 2"
                                        onClick={this.onChangeSpan}
                                      >
                                        1Y
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="lightVersion"
                                        onClick={this.onChangeSpan}
                                      >
                                        Mtd
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                        onClick={this.onChangeSpan}
                                      >
                                        Qtd
                                      </a>
                                    </li>
                                    <li className="tab-item">
                                      <a
                                        href="#"
                                        id="leftVersion"
                                        data-filter="filter 2"
                                        onClick={this.onChangeSpan}
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
                                    <li
                                      className="tab-item"
                                      onClick={this.onChangeInterval}
                                    >
                                      <a
                                        href="#"
                                        id="lightVersion"
                                        className={
                                          interval === 'Hourly'
                                            ? 'interval'
                                            : ''
                                        }
                                      >
                                        Hourly
                                      </a>
                                    </li>
                                    <li
                                      className="tab-item"
                                      onClick={this.onChangeInterval}
                                    >
                                      <a
                                        href="#"
                                        id="darkVersion"
                                        data-filter="filter 1"
                                        className={
                                          interval === 'Daily' ? 'interval' : ''
                                        }
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
                              style={{ height: '400px' }}
                            >
                              <GrossVolume />
                              <TransactionAmount />
                              <TransactionCount />
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
      actionSignOut,
      actionSignOn
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
