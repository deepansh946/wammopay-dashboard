import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';

import './style.css';
import Axios from 'axios';
import readLocalStore from '../../browser/localStoreRead';

class Payouts extends Component {
  state = {
    tableData: [],
    tableKeys: []
  };

  componentWillMount() {
    const token = readLocalStore('token');

    const { access_token } = token.token;
    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/v1/dashboard/getpayouts',
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      data: {
        FromDate: '2019-02-01T12:08:33',
        ToDate: '2019-03-06T12:08:33'
      }
    })
      .then(res => {
        const apiData = res.data['Data'].Data;
        const tableData = apiData.map(res => {
          delete res.Id;
          delete res.MerchantId;
          return res;
        });

        this.setState({
          tableData: tableData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { tableData } = this.state;

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
                      <h1>Payouts</h1>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Date Time</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Currency Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((res, index) => {
                            return (
                              <tr key={index}>
                                <th>{`${res.DateTime.slice(
                                  0,
                                  10
                                )} ${res.DateTime.slice(11, 16)} hrs`}</th>
                                <td>{res.Amount}</td>
                                <td>{res.CurrencyType}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
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
  )(Payouts)
);
