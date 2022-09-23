import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductCard extends Component {
  render() {
    const { thumbnail, title, price, avaliableQty } = this.props;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <div data-testid="product-detail-name">{title}</div>
          <div>{price}</div>
          <div>{avaliableQty}</div>
        </div>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  avaliableQty: 0,
  price: 0,
  thumbnail: '',
  title: '',
};

ProductCard.propTypes = {
  avaliableQty: PropTypes.number,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
