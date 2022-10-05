import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as S from './styled';

export default class Search extends Component {
  render() {
    const { handleSubmit, handleChange, productQuery } = this.props;

    return (
      <S.FormWrapper onSubmit={ handleSubmit }>
        <S.InputItem
          name="productQuery"
          value={ productQuery }
          onChange={ handleChange }
          data-testid="query-input"
          id="search-procuct"
          type="text"
          title="Nome do produto"
          placeholder="Digite o nome do produto"
        />
        <S.Button
          data-testid="query-button"
          type="submit"
          title="Pesquisar produto"
        >
          Pesquisar Produto
        </S.Button>
      </S.FormWrapper>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  productQuery: PropTypes.string.isRequired,
};
