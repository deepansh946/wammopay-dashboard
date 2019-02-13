import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import { Switch } from 'react-router-dom';

import Home from './containers/Home';
import SignIn from './containers/SignIn/index';
import SignUp from './containers/SignUp';

class AppRoutes extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    );
  }
}

export default AppRoutes;
