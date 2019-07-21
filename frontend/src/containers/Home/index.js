import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from '../SignIn';
import Dashboard from '../Dashboard';

import Banner from './FirstSection/index.js';
import Products from './SecondSection/index.js';
import Developers from './ThirdSection/index.js';
import Supports from './FourthSection/index.js';
import FourStep from './FifthSection/index.js';
import SpecialQuote from './SixthSection/index.js';
import GetStart from './SeventhSection/index.js';
import Footer from './Footer/index.js';

import localStoreRead from '../../browser/localStoreRead';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Products />
        <Developers />
        <Supports />
        <FourStep />
        <SpecialQuote />
        <GetStart />
        <Footer />
      </div>
    );
    // const token = localStoreRead('token');
    // return token ? <Dashboard /> : <SignIn />;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
