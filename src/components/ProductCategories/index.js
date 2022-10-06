import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

class ProductCategories extends Component {
  render() {
    const { loading, productsCategories, fetchProductsCategories } = this.props;

    return (
      <S.ProductCategoriesWrapper>
        {!loading ? (
          <S.ProductList>
            {productsCategories.map(({ id, name }) => (
              <div key={ id }>
                <button
                  type="button"
                  data-testid="category"
                  data-product-id={ id }
                  onClick={ fetchProductsCategories }
                >
                  {name}
                </button>
              </div>
            ))}
          </S.ProductList>
        ) : (
          <span>loading...</span>
        )}
      </S.ProductCategoriesWrapper>
    );
  }
}

ProductCategories.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchProductsCategories: PropTypes.func.isRequired,
  productsCategories: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
    }),
  ).isRequired,
};

export default ProductCategories;
