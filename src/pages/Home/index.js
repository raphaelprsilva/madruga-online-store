import React, { Component } from 'react';
import Layout from '../../components/Layout/index';

class Home extends Component {
  render() {
    return (
      <Layout>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </Layout>
    );
  }
}

export default Home;
