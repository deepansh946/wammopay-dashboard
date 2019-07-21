import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

class Balance extends Component {
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
                      <div className="box box-info bg-boxshadow mb-30 balance-box">
                        <div className="box-header">
                          <h2>USD Balance</h2>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-8 col-sm-8 col-8 mb-10">
                              On the way to your bank
                            </div>
                            <div className="col-md-4 col-sm-4 col-4 text-right">
                              <strong>$235.67</strong>
                            </div>
                          </div>
                          <div className="row mb-30">
                            <div className="col-md-8 col-sm-8 col-8 ">
                              Estimated future payouts
                            </div>
                            <div className="col-md-4 col-sm-4 col-4 text-right">
                              <strong>$135.67</strong>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-8 col-sm-8 col-8 ">
                              <h4>Total</h4>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4 text-right">
                              <h4>$371.34</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 balance-box set-sec">
                        <div className="box-header">
                          <h3>On the way to your bank</h3>
                          <p>
                            These funds should arrive in your bank account soon.
                          </p>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-8 col-sm-8 col-8 ">
                              <h4>Total</h4>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4 text-right">
                              <h4>$235.67</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Ibox --> */}
                      <div className="box box-info bg-boxshadow mb-30 balance-box set-sec">
                        <div className="box-header">
                          <h3>Estimated future payouts</h3>
                          <p>
                            These amounts are estimated because transactions are
                            still accumulating. Payouts are scheduled to{' '}
                            <a href="">automatically send daily</a>
                          </p>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <div className="row">
                            <div className="col-md-8 col-sm-8 col-8">
                              <h4>Total</h4>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4 text-right">
                              <h4>$371.34</h4>
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
  )(Balance)
);
