import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  setProductsToLocalStorage,
  getProductsFromLocalStorage,
} from '../../services/localStorageProducts';

export default class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart() {
    const { id, title, price, thumbnail } = this.props;
    const localProducts = getProductsFromLocalStorage();
    const foundProduct = localProducts.find((p) => p.id === id);

    if (!foundProduct) {
      const productDataToAdd = { id, title, price, thumbnail, quantity: 1 };
      const localProductsUpdated = [...localProducts, productDataToAdd];
      setProductsToLocalStorage(localProductsUpdated);
    } else {
      const localProductsUpdated = localProducts.map((p) => {
        if (p.id === foundProduct.id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      setProductsToLocalStorage(localProductsUpdated);
    }
  }

  render() {
    const {
      id,
      thumbnail,
      title,
      price,
      testIdAddToCard,
      qtyShoppingCart,
      testIdProductName,
      avaliableQty,
      showDeleteProductButton,
      showProductsQty,
    } = this.props;

    const renderQtyShoppingCart = showProductsQty ? (
      <span data-testid="shopping-cart-product-quantity">
        Quantidade:
        {' '}
        {qtyShoppingCart}
      </span>
    ) : ('');
    const renderAvaliableQty = avaliableQty ? (
      <div>
        Quantidade Disponível:
        {' '}
        {avaliableQty}
      </div>
    ) : ('');
    const renderDeleteProductButton = showDeleteProductButton ? (
      <button type="button">Remover Produto</button>
    ) : ('');

    return (
      <div key={ id } data-testid="product" data-product-id={ id }>
        <img src={ thumbnail } alt={ title } />
        <p data-testid={ testIdProductName }>{title}</p>
        <p>
          R$
          {price}
        </p>
        {renderQtyShoppingCart}
        {renderAvaliableQty}
        <button
          onClick={ this.addProductToCart }
          type="button"
          data-testid={ testIdAddToCard }
        >
          Adicionar ao carrinho
        </button>
        <Link to={ `/products/${id}` } data-testid="product-detail-link">
          Ver detalhes do produto
        </Link>
        {renderDeleteProductButton}
      </div>
    );
  }
}

ProductListItem.defaultProps = {
  id: '',
  price: 0,
  thumbnail: '',
  title: '',
  qtyShoppingCart: 0,
  testIdAddToCard: 'product-add-to-cart',
  testIdProductName: 'shopping-cart-product-name',
  avaliableQty: 0,
  showDeleteProductButton: false,
  showProductsQty: false,
};

ProductListItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  qtyShoppingCart: PropTypes.number,
  testIdProductName: PropTypes.string,
  testIdAddToCard: PropTypes.string,
  avaliableQty: PropTypes.number,
  showDeleteProductButton: PropTypes.bool,
  showProductsQty: PropTypes.bool,
};
