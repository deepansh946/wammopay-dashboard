import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from '../SignIn';
import Dashboard from '../Dashboard';

import cookieRead from '../../browser/cookieRead';

class Home extends Component {
  render() {
    const Email = cookieRead('email');
    return Email ? <Dashboard /> : <SignIn />;
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
