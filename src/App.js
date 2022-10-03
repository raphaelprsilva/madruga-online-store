import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, ShoppingCart, ProductDetails } from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/products/:productId"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route
            path="/shopping-cart"
            render={ (props) => <ShoppingCart { ...props } shoppingCart /> }
          />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
