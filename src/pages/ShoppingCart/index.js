import React, { Component } from 'react';
import { Layout } from '../../components';

class ShoppingCart extends Component {
  render() {
    return (
      <Layout>
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      </Layout>
    );
  }
}

export default ShoppingCart;
