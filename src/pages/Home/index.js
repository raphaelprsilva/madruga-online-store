import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import ProductCategories from '../../components/ProductCategories';

class Home extends Component {
  render() {
    return (
      <Layout>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <ProductCategories />
      </Layout>
    );
  }
}

export default Home;
