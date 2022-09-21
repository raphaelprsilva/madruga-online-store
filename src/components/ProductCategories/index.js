import React, { Component } from 'react';
import { getCategories } from '../../services/api';

class ProductCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productsCategories: [],
    };
    this.getProductsCategories = this.getProductsCategories.bind(this);
  }

  componentDidMount() {
    this.getProductsCategories();
  }

  async getProductsCategories() {
    this.setState({ loading: true }, async () => {
      const categories = await getCategories();
      this.setState({ loading: false, productsCategories: categories });
    });
  }

  render() {
    const { loading, productsCategories } = this.state;

    return (
      <section>
        {!loading ? (
          <aside>
            {productsCategories.map(({ id, name }) => (
              <div key={ id }>
                <button type="button" data-testid="category">
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

export default ProductCategories;
