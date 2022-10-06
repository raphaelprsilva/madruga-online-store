import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from '../../services/localStorageProducts';
import ProductListItem from '../ProductListItem';
import * as S from './styled';

export default class ProductsList extends Component {
  componentDidMount() {
    const localProducts = getProductsFromLocalStorage();
    if (!localProducts) {
      setProductsToLocalStorage([]);
    }
  }

  render() {
    const { loading, products } = this.props;

    return (
      <S.ProductsListWrapper>
        {!loading ? (
          <S.Wrapper>
            {!products.length ? (
              <span>Nenhum produto foi encontrado</span>
            ) : (
              <S.ProductsWrapper>
                {products.map(({ id, title, thumbnail, price }) => (
                  <ProductListItem
                    key={ id }
                    id={ id }
                    title={ title }
                    thumbnail={ thumbnail }
                    price={ price }
                    standardItem
                  />
                ))}
              </S.ProductsWrapper>
            )}
          </S.Wrapper>
        ) : (
          <div>loading...</div>
        )}
      </S.ProductsListWrapper>
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
