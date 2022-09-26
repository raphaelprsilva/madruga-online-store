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
      handleClick,
      qtyShoppingCart,
      testIdProductName,
      testIdQuantity,
    } = this.props;

    const renderQtyShoppingCart = qtyShoppingCart ? (
      <span data-testid={ testIdQuantity }>
        Quantidade:
        {' '}
        {qtyShoppingCart}
      </span>
    ) : (
      ''
    );
    return (
      <div key={ id } data-testid="product" data-product-id={ id }>
        <img src={ thumbnail } alt={ title } />
        <p data-testid={ testIdProductName }>{title}</p>
        <p>
          R$
          {price}
        </p>
        {renderQtyShoppingCart}
        <button
          onClick={ handleClick }
          type="button"
          data-testid="product-add-to-cart"
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
  qtyShoppingCart: 0,
  testIdProductName: '',
  testIdQuantity: '',
};

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  qtyShoppingCart: PropTypes.number,
  testIdProductName: PropTypes.string,
  testIdQuantity: PropTypes.string,
};
