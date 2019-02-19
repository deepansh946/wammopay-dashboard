import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import VirtualTerminal from './containers/VirtualTerminal';
import Resources from './containers/Resources';

class AppRoutes extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/virtual-terminal" component={VirtualTerminal} />
          <Route exact path="/resources" component={Resources} />
        </Switch>
      </BrowserRouter>
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
