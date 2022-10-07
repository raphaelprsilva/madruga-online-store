import React, { Component } from 'react';
import ProductListItem from '../../components/ProductListItem';
import Layout from '../../components/Layout';
import { getProductsFromLocalStorage } from '../../services/localStorageProducts';
import * as S from './styled';
import CheckoutForm from '../../components/CheckoutForm';

export default class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
      totalPrice: 0,
    };

    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTotalPrice = this.getTotalPrice.bind(this);
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  getTotalPrice() {
    const localProducts = getProductsFromLocalStorage();
    const totalPrice = localProducts.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    this.setState({ shoppingCart: localProducts, totalPrice });
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

  render() {
    const { shoppingCart, totalPrice } = this.state;

    const roundedTotalPrice = totalPrice.toFixed(2);

    return (
      <Layout>
        <S.MainWrapper>
          <S.ProductsWrapper>
            <S.Title>Produtos do carrinho</S.Title>
            {shoppingCart.length
              && shoppingCart.map(({ id, title, thumbnail, price, quantity }) => (
                <ProductListItem
                  key={ id }
                  id={ id }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  qtyShoppingCart={ quantity }
                  getTotalPrice={ this.getTotalPrice }
                  showHandleQuantityButtons
                  showAddProductToCardButton={ false }
                />
              ))}
          </S.ProductsWrapper>
          <S.FormTotalWrapper>
            <S.TotalPriceWrapper>
              <p>Total</p>
              <span>
                R$
                {' '}
                {roundedTotalPrice.replace('.', ',')}
              </span>
            </S.TotalPriceWrapper>
            <S.CheckoutFormWrapper>
              <S.Title>Informações da Compa</S.Title>
              <CheckoutForm handleSubmit={ this.handleSubmit } />
            </S.CheckoutFormWrapper>
          </S.FormTotalWrapper>
        </S.MainWrapper>
      </Layout>
    );
  }
}
