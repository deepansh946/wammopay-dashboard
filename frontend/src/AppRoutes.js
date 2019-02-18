import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import localStoreRead from '../src/browser/localStoreRead';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';

class AppRoutes extends Component {
  state = {};

  render() {
    let isSignedIn = false;
    if (localStoreRead('user')) isSignedIn = true;
    return (
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRoutes)
);
