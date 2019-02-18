import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignIn from '../SignIn';
import Dashboard from '../Dashboard';

class Home extends Component {
  render() {
    const { userReducer } = this.props;
    const { isSignedIn } = userReducer;
    return isSignedIn
      ? this.props.history.push('/dashboard')
      : this.props.history.push('/sign-in');
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
