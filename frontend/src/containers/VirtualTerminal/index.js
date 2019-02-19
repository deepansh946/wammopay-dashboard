import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import SideBar from '../../components/SideBar';

class VirtualTerminal extends Component {
  state = {};

  render() {
    return (
      <div className="template-light">
        <div class="main-wrapper" id="mainWrapper">
          <div class="page-wrapper d-flex clearfix">
            <Header />

            <SideBar />
            {/* <!-- ====== Page Content Area Start ====== --> */}
            <div className="page-content">
              {/* <!-- Wrapper --> */}
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="box box-info bg-boxshadow mb-30">
                        <div className="box-header mb-30">
                          <h3>Order Details</h3>
                        </div>
                        {/* <!-- Ibox Content --> */}
                        <div className="box-body">
                          <form className="order-form" method="" action="">
                            <div className="row">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Product</label>
                                  </div>
                                  <div className="col-md-8">
                                    <select name="select">
                                      <option value="d">Select Product</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Order Amount</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="$ 0.00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mb-20">
                              <div className="col-xl-12 col-md-12 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-2">
                                    <label>Order Note</label>
                                  </div>
                                  <div className="col-md-10">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter if any note you want to add"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <h3 className="mb-30 mt-30">Card Details</h3>
                            <div className="row mb-20">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Card Number</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter the Card Number"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Expiration Date</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter the date"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="row mb-30">
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>CVV/CVV2</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter your CVV number"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 col-md-6 col-sm-12">
                                <div className="row form-r">
                                  <div className="col-md-4">
                                    <label>Billing Zipcode</label>
                                  </div>
                                  <div className="col-md-8">
                                    <input
                                      type="text"
                                      className="form"
                                      name=""
                                      placeholder="Enter the zip code"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <button
                                type="button"
                                className="btn waves-effect m-2 btn-round btn-default"
                              >
                                Make the payment
                              </button>
                            </div>
                          </form>
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
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(VirtualTerminal)
);
