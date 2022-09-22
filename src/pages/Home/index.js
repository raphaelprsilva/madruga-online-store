import React, { Component } from 'react';
import Layout from '../../components/Layout/index';
import ProductCategories from '../../components/ProductCategories';
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
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              name="productQuery"
              value={ productQuery }
              onChange={ this.handleChange }
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
        <ProductCategories />
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
                    </div>
                  ))}
                </div>
              )}
            </section>
          ) : (
            <div>loading...</div>
          )}
        </section>
      </Layout>
    );
  }
}

export default Home;
