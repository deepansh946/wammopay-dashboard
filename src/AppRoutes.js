import React, { Component } from 'react';
import Route from 'react-router-dom/Route';

 import Home from './containers/Home';

 class AppRoutes extends Component {
  state = {}

   render() {
    return (
      <Route path="/" exact component={Home} />
    );
  }
}

 export default AppRoutes;