import React, { Component } from 'react';
import ProductListItem from '../../components/ProductListItem/index';
import Layout from '../../components/Layout/index';
import { getProductsFromLocalStorage } from '../../services/localStorageProducts';

const STATES = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

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

    return (
      <Layout>
        <section>
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
        </section>
        <section>
          <p>Total</p>
          <span>{totalPrice}</span>
        </section>
        <section>
          <h2>Informações da Compa</h2>
          <form onSubmit={ this.handleSubmit }>
            <input
              type="text"
              name="email"
              placeholder="Nome completo"
              data-testid="checkout-fullname"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-testid="checkout-email"
            />
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              data-testid="checkout-cep"
            />
            <input
              type="text"
              name="address"
              placeholder="Endereço"
              data-testid="checkout-address"
            />
            <input
              type="text"
              name="complement"
              placeholder="Complemento"
              data-testid="checkout-complement"
            />
            <input
              type="number"
              name="number"
              placeholder="Número"
              data-testid="checkout-number"
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              data-testid="checkout-city"
            />
            <select name="" id="">
              {STATES.map((state) => (
                <option value={ state } key={ state }>
                  {state}
                </option>
              ))}
            </select>
            <h2>Método de pagamento</h2>
            <label htmlFor="payment">
              Cartão de crédito
              <input type="radio" name="payment" id="payment" />
            </label>
            <label htmlFor="payment">
              Boleto
              <input type="radio" name="payment" id="payment" />
            </label>
            <button type="submit">Comprar</button>
          </form>
        </section>
      </Layout>
    );
  }
}
