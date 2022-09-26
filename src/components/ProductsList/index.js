import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const {
      parentElement: { dataset },
    } = target;
    const { productId } = dataset;

    const { products } = this.props;
    const productData = products.find(({ id }) => id === productId);

    const { shoppingCart } = this.state;
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
    const { loading, products } = this.props;

    return (
      <section>
        {!loading ? (
          <section>
            {!products.length ? (
              <span>Nenhum produto foi encontrado</span>
            ) : (
              <div>
                {products.map(({ id, title, thumbnail, price }) => (
                  <ProductListItem
                    key={ id }
                    id={ id }
                    title={ title }
                    thumbnail={ thumbnail }
                    price={ price }
                    handleClick={ this.handleClick }
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          <div>loading...</div>
        )}
      </section>
    );
  }
}

ProductsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      length: PropTypes.number,
      map: PropTypes.func,
    }),
  ).isRequired,
};
