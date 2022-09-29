import React, { Component } from 'react';
import { Layout } from '../../components';
import ProductListItem from '../../components/ProductListItem';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
    };

    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  getProductsFromLocalStorage() {
    const storageCartItems = localStorage.getItem('shoppingCartStorage');
    const localStorageShoppingCart = JSON.parse(storageCartItems);
    this.setState({ shoppingCart: localStorageShoppingCart });
  }

  render() {
    const { shoppingCart } = this.state;

    const emptyCart = (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );

    return (
      <Layout>
        <section>
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
                  showProductsQty
                />
              ),
            )
            : emptyCart}
        </section>
      </Layout>
    );
  }
}

export default ShoppingCart;
