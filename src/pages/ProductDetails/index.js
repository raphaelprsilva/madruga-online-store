import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components';
import { getProductById } from '../../services/api';
import ProductListItem from '../../components/ProductListItem/index';

/*
  [
    { "idProduto": [{}, {}, {}]},
    { "idProduto": [{}, {}, {}]},
    { "idProduto": [{}, {}, {}]},
    { "idProduto": [{}, {}, {}]},
  ]
*/

import {
  getProductsFromLocalStorage,
  getRatingsFromLocalStorage,
  setRatingsToLocalStorage,
} from '../../services/localStorageProducts';
import StarRating from '../../components/StarRating';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productDetails: {},
      email: '',
      rating: 0,
      comment: '',
      ratings: [],
    };

    this.getProductDetails = this.getProductDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setRating = this.setRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
    getProductsFromLocalStorage();

    const localRatings = getRatingsFromLocalStorage();
    if (!localRatings) {
      setRatingsToLocalStorage([]);
    } else {
      const {
        match: { params },
      } = this.props;
      const { productId } = params;
      const filteredRatings = localRatings.filter(
        (r) => r.id === productId,
      );
      this.setState({ ratings: filteredRatings });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      match: { params },
    } = this.props;
    const { productId } = params;
    const { email, rating, comment } = this.state;
    if (email && rating && comment) {
      const localRatings = getRatingsFromLocalStorage();
      const userRating = { id: productId, email, rating, comment };
      this.setState((prevState) => ({
        ratings: [...prevState.ratings, userRating],
      }));
      const newRatings = localRatings.concat(userRating);
      setRatingsToLocalStorage(newRatings);
    }
  }

  async getProductDetails() {
    const {
      match: { params },
    } = this.props;
    const { productId } = params;
    this.setState({ loading: true }, async () => {
      const productData = await getProductById(productId);
      this.setState({ loading: false, productDetails: productData });
    });
  }

  setRating(rating) {
    this.setState({ rating });
  }

  render() {
    const { loading, productDetails, email, rating, comment, ratings } = this.state;
    const {
      id,
      title,
      thumbnail,
      price,
      available_quantity: avaliableQty,
    } = productDetails;

    return (
      <Layout>
        <section>
          {!loading ? (
            <ProductListItem
              key={ id }
              id={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
              avaliableQty={ avaliableQty }
              testIdProductName="product-detail-name"
              testIdAddToCard="product-detail-add-to-cart"
            />
          ) : (
            <div>loading...</div>
          )}
        </section>
        <section>
          <h2>Avaliações</h2>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                data-testid="product-detail-email"
                placeholder="Digite seu email"
              />
            </label>
            <div>
              Avaliação:
              <StarRating rating={ rating } setRating={ this.setRating } />
            </div>
            <label htmlFor="comment">
              Comentário:
              <textarea
                id="comment"
                name="comment"
                value={ comment }
                onChange={ this.handleChange }
                data-testid="product-detail-evaluation"
              />
            </label>
            <button type="submit" data-testid="submit-review-btn">
              Avaliar
            </button>
          </form>
        </section>
        <section>
          {ratings.length > 0
            && ratings.map((r, index) => (
              <div key={ index }>
                <div>
                  <div>E-mail:</div>
                  <div>{r.email}</div>
                </div>
                <div>
                  <div>Avaliação:</div>
                  <div>{r.rating}</div>
                  <div>/ 5</div>
                </div>
                <div>
                  <div>Comentário:</div>
                  <div>{r.comment}</div>
                </div>
              </div>
            ))}
        </section>
      </Layout>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
    }),
  }).isRequired,
};
