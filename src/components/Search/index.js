import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { handleSubmit, handleChange, productQuery } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <input
            name="productQuery"
            value={ productQuery }
            onChange={ handleChange }
            data-testid="query-input"
            id="search-procuct"
            type="text"
            title="Nome do produto"
          />
          <button
            data-testid="query-button"
            type="submit"
            title="Pesquisar produto"
          >
            Pesquisar Produto
          </button>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  productQuery: PropTypes.string.isRequired,
};
