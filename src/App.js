import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, ShoppingCart, ProductDetails } from './pages';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     products: [],
  //     shoppingCart: [],
  //   };

  //   this.addProductToCart = this.addProductToCart.bind(this);
  // }

  // addProductToCart({ target }) {
  //   const {
  //     parentElement: { dataset },
  //   } = target;
  //   const { productId } = dataset;

  //   const { products } = this.state;
  //   const productData = products.find(({ id }) => id === productId);

  //   const { shoppingCart } = this.state;
  //   const isProductAlreadyAdded = shoppingCart.some(
  //     ({ id }) => id === productData.id,
  //   );

  //   if (!isProductAlreadyAdded) {
  //     const productToAdd = { ...productData, qtyShoppingCart: 1 };
  //     this.setState((prevState) => ({
  //       shoppingCart: [...prevState.shoppingCart, productToAdd],
  //     }));
  //   } else {
  //     this.setState((prevState) => {
  //       const foundProduct = prevState.shoppingCart.find(
  //         ({ id }) => id === productId,
  //       );
  //       const updatedShoppingCart = prevState.shoppingCart.map((product) => {
  //         if (product.id === foundProduct.id) {
  //           return {
  //             ...product,
  //             qtyShoppingCart: product.qtyShoppingCart + 1,
  //           };
  //         }
  //         return product;
  //       });

  //       return {
  //         shoppingCart: updatedShoppingCart,
  //       };
  //     });
  //   }
  // }

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
