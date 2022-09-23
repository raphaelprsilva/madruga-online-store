import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../../components';
import { getProductById } from '../../services/api';
import ProductCard from '../../components/ProductCard';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      productDetails: {},
    };

    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
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

  render() {
    const { loading, productDetails } = this.state;
    const {
      title,
      thumbnail,
      price,
      available_quantity: avaliableQty,
    } = productDetails;

    return (
      <Layout>
        <section>
          {!loading ? (
            <ProductCard
              thumbnail={ thumbnail }
              title={ title }
              price={ price }
              avaliableQty={ avaliableQty }
            />
          ) : (
            <div>loading...</div>
          )}
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
