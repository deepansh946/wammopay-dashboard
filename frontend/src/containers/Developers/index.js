import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';

import { Chart } from 'react-charts';

const lineChart = (
  <div
    style={{
      width: '400px',
      height: '300px'
    }}
  >
    <Chart
      data={[
        {
          label: 'Series 1',
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: 'Series 2',
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        },
        {
          label: 'Series 3',
          data: [[0, 3], [1, 1], [2, 3], [3, 4], [4, 1]]
        },
        {
          label: 'Series 4',
          data: [[0, 3], [1, 1], [3, 6], [5, 1], [7, 3]]
        },
        {
          label: 'Series 5',
          data: [[0, 3], [1, 5], [2, 5], [2, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]}
    />
  </div>
);

class Developers extends Component {
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
                <h1>Hello Developers!</h1>
                {lineChart}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // actions here
    },
    dispatch
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Developers)
);
