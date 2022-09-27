import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductListItem from '../ProductListItem';

import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from '../../services/localStorageProducts';

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    const localProducts = getProductsFromLocalStorage();
    if (!localProducts) {
      setProductsToLocalStorage([]);
    }
  }

  addProduct({ target }) {
    const localProducts = getProductsFromLocalStorage();
    const {
      parentElement: { dataset },
    } = target;
    const { productId } = dataset;
    const foundLocalProduct = localProducts.find(
      (localProduct) => localProduct.id === productId,
    );
    if (!localProducts.length || !foundLocalProduct) {
      const { products } = this.props;
      const foundProductToAdd = products.find(
        (product) => product.id === productId,
      );
      const productToAdd = { ...foundProductToAdd, qtyShoppingCart: 1 };
      const newItemToLocal = [...localProducts, productToAdd];
      setProductsToLocalStorage(newItemToLocal);
    } else {
      const productToAdd = {
        ...foundLocalProduct,
        qtyShoppingCart: foundLocalProduct.qtyShoppingCart + 1,
      };
      const storageProductsUpdated = localProducts.map((localProduct) => {
        if (localProduct.id === foundLocalProduct.id) return productToAdd;
        return localProduct;
      });
      setProductsToLocalStorage(storageProductsUpdated);
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
                    addProduct={ this.addProduct }
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
