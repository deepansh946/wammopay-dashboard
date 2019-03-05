import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from '../SignIn';
import Dashboard from '../Dashboard';

import localStoreRead from '../../browser/localStoreRead';

class Home extends Component {
  render() {
    const token = localStoreRead('token');
    return token ? <Dashboard /> : <SignIn />;
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
