import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductListItem extends Component {
  render() {
    const { id, thumbnail, title, price } = this.props;
    return (
      <div key={ id } data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>
          R$
          {price}
        </p>
        <Link to={ `/products/${id}` } data-testid="product-detail-link">
          Ver detalhes do produto
        </Link>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
