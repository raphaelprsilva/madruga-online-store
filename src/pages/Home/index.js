import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import ProductCategories from '../../components/ProductCategories';
import ProductsList from '../../components/ProductsList';
import Search from '../../components/Search';
import { getProductsFromCategoryAndQuery } from '../../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      productQuery: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { productQuery } = this.state;

    this.setState({ loading: true }, async () => {
      const productsData = await getProductsFromCategoryAndQuery(
        '',
        productQuery,
      );
      const { results } = productsData;
      this.setState({ loading: false, products: results });
    });
  }

  render() {
    const { productQuery, products, loading } = this.state;

    return (
      <Layout>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Search
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
          productQuery={ productQuery }
        />
        <ProductCategories />
        <ProductsList loading={ loading } products={ products } />
      </Layout>
    );
  }
}

export default Home;
