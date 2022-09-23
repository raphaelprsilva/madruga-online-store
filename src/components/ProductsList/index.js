import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductsList extends Component {
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
                  <div key={ id } data-testid="product">
                    <img src={ thumbnail } alt={ title } />
                    <p>{title}</p>
                    <p>
                      R$
                      {price}
                    </p>
                    <Link
                      to={ `/products/${id}` }
                      data-testid="product-detail-link"
                    >
                      Ver detalhes do produto
                    </Link>
                  </div>
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
