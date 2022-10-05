import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import ProductCategories from '../../components/ProductCategories';
import ProductsList from '../../components/ProductsList';
import Search from '../../components/Search';
import {
  getProductsFromCategoryAndQuery,
  getCategories,
} from '../../services/api';

import * as S from './styled';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      products: [],
      productsCategories: [],
      productQuery: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getProductsCategories = this.getProductsCategories.bind(this);
    this.getProductsFromCategory = this.getProductsFromCategory.bind(this);
  }

  componentDidMount() {
    this.getProductsCategories();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    this.getProductsFromCategory(target);
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
      this.setState({ loading: false, products: results, productQuery: '' });
    });
  }

  async getProductsFromCategory(target) {
    const categoryId = target.dataset.productId;
    this.setState({ loading: true }, async () => {
      const products = await getProductsFromCategoryAndQuery(categoryId, '');
      this.setState({ loading: false, products: products.results });
    });
  }

  async getProductsCategories() {
    this.setState({ loading: true }, async () => {
      const categories = await getCategories();
      this.setState({ loading: false, productsCategories: categories });
    });
  }

  render() {
    const { productsCategories, productQuery, products, loading } = this.state;

    return (
      <Layout>
        <S.SearchWrapper>
          <S.SearchInfo data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </S.SearchInfo>
          <Search
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            productQuery={ productQuery }
          />
        </S.SearchWrapper>
        <S.ProductsWrapper>
          <ProductCategories
            loading={ loading }
            productsCategories={ productsCategories }
            fetchProductsCategories={ this.handleClick }
          />
          <ProductsList loading={ loading } products={ products } />
        </S.ProductsWrapper>
      </Layout>
    );
  }
}

export default Home;
