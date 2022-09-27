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
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  getProductsFromLocalStorage() {
    const storageCartItems = localStorage.getItem('shoppingCartStorage');
    const localStorageShoppingCart = JSON.parse(storageCartItems);
    this.setState({ shoppingCart: localStorageShoppingCart });
  }

  addProduct({ target }) {
    const {
      parentElement: { dataset },
    } = target;
    const { productId } = dataset;

    const { shoppingCart } = this.state;
    const productData = shoppingCart.find(({ id }) => id === productId);

    const isProductAlreadyAdded = shoppingCart.some(
      ({ id }) => id === productData.id,
    );

    if (!isProductAlreadyAdded) {
      const productToAdd = { ...productData, qtyShoppingCart: 1 };
      this.setState((prevState) => {
        const updatedShoppingCart = [...prevState.shoppingCart, productToAdd];
        localStorage.setItem(
          'shoppingCartStorage',
          JSON.stringify(updatedShoppingCart),
        );
        return {
          shoppingCart: updatedShoppingCart,
        };
      });
    } else {
      this.setState((prevState) => {
        const foundProduct = prevState.shoppingCart.find(
          ({ id }) => id === productId,
        );
        const updatedShoppingCart = prevState.shoppingCart.map((product) => {
          if (product.id === foundProduct.id) {
            return {
              ...product,
              qtyShoppingCart: product.qtyShoppingCart + 1,
            };
          }
          return product;
        });

        localStorage.setItem(
          'shoppingCartStorage',
          JSON.stringify(updatedShoppingCart),
        );
        return {
          shoppingCart: updatedShoppingCart,
        };
      });
    }
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
              ({ id, title, thumbnail, price, qtyShoppingCart }) => (
                <ProductListItem
                  key={ id }
                  id={ id }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  qtyShoppingCart={ qtyShoppingCart }
                  addProduct={ this.addProduct }
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
