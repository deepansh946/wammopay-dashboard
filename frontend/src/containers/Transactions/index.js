import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';

import readLocalStore from '../../browser/localStoreRead';

import './style.css';
import Axios from 'axios';

class Transactions extends Component {
  state = {
    tableData: []
  };

  componentWillMount() {
    const token = readLocalStore('token');

    const { access_token } = token.token;

    if (!access_token) {
      this.props.history.push('/sign-in');
    }

    Axios({
      method: 'GET',
      url: 'https://api.wammopay.com/v1/transaction/getcolumns',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(res => {
        const apiData = res.data;

        const columns = apiData['Data'].Data;
        const columnsArray = Object.keys(columns).filter(res => {
          return (
            res !== '_tra.id' &&
            res !== '_tra.FeeDescription' &&
            res !== '_tra.Description'
          );
        });

        console.log(columnsArray);

        Axios({
          url: 'https://api.wammopay.com/v1/transaction/gettransactions',
          method: 'POST',
          data: {
            FromDate: '2019-02-01T12:08:33.327Z',
            ToDate: '2019-03-06T12:08:33.327Z',
            Columns: columnsArray
          },
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })
          .then(res => {
            const apiData = res.data['Data'].Data;
            // console.log(apiData);

            const tableData = apiData.map(res => {
              console.log(res);
              return res;
            });
            this.setState({
              tableData: tableData
            });
          })
          .catch(err => {
            console.log(err);
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
                      <h1>Transactions</h1>
                      {/* <!-- Ibox --> */}
                      <table className="table">
                        <thead>
                          {/* {Object.entries()} */}
                          <tr>
                            <th scope="col">Amount</th>
                            <th scope="col">Fee</th>
                            <th scope="col">Net</th>
                            <th scope="col">Currency Type</th>
                            <th scope="col">Original Amount</th>
                            <th scope="col">Original Currency Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.map((res, index) => {
                            return (
                              <tr key={index}>
                                <th>{res.amount}</th>
                                <td>{res.Fee}</td>
                                <td>{res.Net}</td>
                                <td>{res.currencyType}</td>
                                <td>{res.OriginalAmount}</td>
                                <td>{res.OriginalCurrencyType}</td>
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
  )(Transactions)
);
