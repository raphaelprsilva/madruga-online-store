import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, ShoppingCart } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
