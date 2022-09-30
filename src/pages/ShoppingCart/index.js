import React, { Component } from 'react';
import { Layout } from '../../components';
import ProductListItem from '../../components/ProductListItem';
import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from '../../services/localStorageProducts';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      totalPrice: 0,
    };

    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  getProductsFromLocalStorage() {
    const storageCartItems = localStorage.getItem('shoppingCartStorage');
    const localStorageShoppingCart = JSON.parse(storageCartItems);
    const totalPrice = localStorageShoppingCart.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    this.setState({ shoppingCart: localStorageShoppingCart, totalPrice });
  }

  getTotalPrice() {
    const localProducts = getProductsFromLocalStorage();
    const totalPrice = localProducts.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    this.setState({ shoppingCart: localProducts, totalPrice });
  }

  removeProduct({ target }) {
    const {
      parentElement: {
        dataset: { productId },
      },
    } = target;
    const localProducts = getProductsFromLocalStorage();
    const filteredItems = localProducts.filter((p) => p.id !== productId);
    this.setState({ shoppingCart: filteredItems });
    setProductsToLocalStorage(filteredItems);
  }

  render() {
    const { shoppingCart, totalPrice } = this.state;

    const emptyCart = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    return (
      <Layout>
        <section>
          {shoppingCart.length
            ? shoppingCart.map(({ id, title, thumbnail, price, quantity }) => (
              <ProductListItem
                key={ id }
                id={ id }
                title={ title }
                price={ price }
                thumbnail={ thumbnail }
                qtyShoppingCart={ quantity }
                removeItem={ this.removeProduct }
                getTotalPrice={ this.getTotalPrice }
                showDeleteProductButton
                showHandleQuantityButtons
              />
            ))
            : emptyCart}
        </section>
        <section>
          <p>Total</p>
          <span>{totalPrice}</span>
        </section>
      </Layout>
    );
  }
}

export default ShoppingCart;
