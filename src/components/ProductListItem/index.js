import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductListItem extends Component {
  render() {
    const {
      id,
      thumbnail,
      title,
      price,
      addProduct,
      qtyShoppingCart,
      testIdAddToCard,
      testIdProductName,
      testIdQuantity,
      avaliableQty,
    } = this.props;

    const renderQtyShoppingCart = qtyShoppingCart ? (
      <span data-testid={ testIdQuantity }>
        Quantidade:
        {' '}
        {qtyShoppingCart}
      </span>
    ) : ('');
    const renderAvaliableQty = avaliableQty ? (
      <div>
        Quantidade Disponível:
        {' '}
        { avaliableQty }
      </div>
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
          onClick={ addProduct }
          type="button"
          data-testid={ testIdAddToCard }
        >
          Adicionar ao carrinho
        </button>
        <Link to={ `/products/${id}` } data-testid="product-detail-link">
          Ver detalhes do produto
        </Link>
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
  testIdQuantity: 'shopping-cart-product-quantity',
  avaliableQty: 0,
};

ProductListItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  addProduct: PropTypes.func.isRequired,
  qtyShoppingCart: PropTypes.number,
  testIdProductName: PropTypes.string,
  testIdQuantity: PropTypes.string,
  testIdAddToCard: PropTypes.string,
  avaliableQty: PropTypes.number,
};
