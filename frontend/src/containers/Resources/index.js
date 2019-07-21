import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

class Resources extends Component {
  state = {};

  onDownload = () => {
    setTimeout(() => {
      const response = {
        file: '/assets/woocommerce-wammo-payment-gateway.zip'
      };
      window.open(response.file);
    }, 100);
  };

  render() {
    return (
      <div className="template-light">
        <div className="main-wrapper" id="mainWrapper">
          <Header />
          <div className="page-wrapper d-flex clearfix">
            <SideBar />
            <div className="page-content">
              <div className="wrapper wrapper-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="box box-info bg-boxshadow mb-30 payout-setting">
                        <div className="box-header">
                          <h2>WammoPay WordPress Plugin</h2>
                        </div>
                        <div className="box-body">
                          <div className="account-no mb-50">
                            <i className="" />
                            <span className="">
                              WammoPay WordPress Plugin for Woocommerce
                            </span>
                            <div className="set-edit">
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#exportModal"
                                className="btn btn-outline-primary btn-round-holo"
                                onClick={this.onDownload}
                              >
                                <a href="#" />
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="box box-info bg-boxshadow mb-30 payout-setting">
                        <div className="box-header">
                          <h2>WammoPay Codeigniter Plugin</h2>
                        </div>
                        <div className="box-body">
                          <div className="account-no mb-50">
                            <i className="" />
                            <span className="">
                              WammoPay Codeigniter Plugin for Custom Platforms
                            </span>
                            <div className="set-edit">
                              <button
                                type="button"
                                data-toggle="modal"
                                data-target="#exportModal"
                                className="btn btn-outline-primary btn-round-holo"
                              >
                                Download
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
  )(Resources)
);
