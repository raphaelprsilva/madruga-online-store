import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../components';
import ProductListItem from '../../components/ProductListItem';
import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from '../../services/localStorageProducts';
import * as S from './styled';

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
    this.setProductsQty = this.setProductsQty.bind(this);
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

  setProductsQty(products) {
    return products.reduce((acc, product) => acc + product.quantity, 0);
  }

  removeProduct({ target }) {
    const {
      parentElement: {
        dataset: { productId },
      },
    } = target;
    const localProducts = getProductsFromLocalStorage();
    const filteredItems = localProducts.filter((p) => p.id !== productId);
    const productsQty = this.setProductsQty(filteredItems);
    localStorage.setItem('productsQty', productsQty);
    const totalPrice = filteredItems.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    this.setState({ shoppingCart: filteredItems, totalPrice });
    setProductsToLocalStorage(filteredItems);
  }

  render() {
    const { shoppingCart, totalPrice } = this.state;

    const emptyCart = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    const roundedTotalPrice = Math.round(totalPrice * 100) / 100;

    return (
      <Layout>
        <S.SectionsWrapper>
          <S.CartItemsWrapper>
            {shoppingCart.length
              ? shoppingCart.map(
                ({ id, title, thumbnail, price, quantity }) => (
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
                ),
              )
              : emptyCart}
          </S.CartItemsWrapper>
          <S.TotalWrapper>
            <p>Total</p>
            <span>
              R$
              {' '}
              {roundedTotalPrice.toString().replace('.', ',')}
            </span>
            <Link to="/checkout">
              <S.CheckoutButton type="button" data-testid="checkout-products">
                Finalizar Compra
              </S.CheckoutButton>
            </Link>
          </S.TotalWrapper>
        </S.SectionsWrapper>
      </Layout>
    );
  }
}

export default ShoppingCart;
