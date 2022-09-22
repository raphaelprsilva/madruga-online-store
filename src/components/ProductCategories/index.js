import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCategories extends Component {
  render() {
    const { loading, productsCategories, fetchProductsCategories } = this.props;

    return (
      <section>
        {!loading ? (
          <aside>
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
          </aside>
        ) : (
          <span>loading...</span>
        )}
      </section>
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
