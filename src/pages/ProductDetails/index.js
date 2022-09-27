import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components';
import { getProductById } from '../../services/api';
import ProductListItem from '../../components/ProductListItem/index';

import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from '../../services/localStorageProducts';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productDetails: {},
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    getProductsFromLocalStorage();
  }

  async getProductDetails() {
    const {
      match: { params },
    } = this.props;
    const { productId } = params;
    this.setState({ loading: true }, async () => {
      const productData = await getProductById(productId);
      this.setState({ loading: false, productDetails: productData });
    });
  }

  addProduct({ target }) {
    const localProducts = getProductsFromLocalStorage();
    const { parentElement: { dataset } } = target;
    const { productId } = dataset;
    const productFound = localProducts.find(
      (localProduct) => localProduct.id === productId,
    );

    if (!localProducts.length || !productFound) {
      const { productDetails } = this.state;
      const productToAdd = { ...productDetails, qtyShoppingCart: 1 };
      const newItemToLocal = [...localProducts, productToAdd];
      setProductsToLocalStorage(newItemToLocal);
    } else {
      const productToAdd = {
        ...productFound,
        qtyShoppingCart: productFound.qtyShoppingCart + 1,
      };
      const storageProductsUpdated = localProducts.map((localProduct) => {
        if (localProduct.id === productFound.id) return productToAdd;
        return localProduct;
      });
      setProductsToLocalStorage(storageProductsUpdated);
    }
  }

  render() {
    const { loading, productDetails } = this.state;
    const {
      id,
      title,
      thumbnail,
      price,
      available_quantity: avaliableQty,
    } = productDetails;

    return (
      <Layout>
        <section>
          {!loading ? (
            <ProductListItem
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              avaliableQty={ avaliableQty }
              testIdProductName="product-detail-name"
              testIdAddToCard="product-detail-add-to-cart"
              addProduct={ this.addProduct }
            />
          ) : (
            <div>loading...</div>
          )}
        </section>
      </Layout>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};
