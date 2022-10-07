import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  setProductsToLocalStorage,
  getProductsFromLocalStorage,
} from '../../services/localStorageProducts';

import * as S from './styled';

export default class ProductListItem extends Component {
  constructor(props) {
    super(props);

    const { qtyShoppingCart } = this.props;
    this.state = {
      productQuantity: qtyShoppingCart,
    };

    this.setProductQty = this.setProductQty.bind(this);
    this.handleProductQty = this.handleProductQty.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setProductsQty = this.setProductsQty.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(({
      [name]: value,
    }), () => this.validateValue(value));
  }

  handleProductQty(product, productToUpdate, operation) {
    const increaseOrDecrease = operation;
    const handleQty = increaseOrDecrease === 'increase'
      ? product.quantity + 1
      : product.quantity - 1;
    const finalQty = handleQty <= 0 ? 0 : handleQty;
    if (product.id === productToUpdate.id) {
      this.setState(
        { productQuantity: finalQty },
        () => this.validateValue(finalQty),
      );
      return {
        ...product,
        quantity: finalQty,
      };
    }
    return product;
  }

  setProductsQty(products) {
    return products.reduce(
      (acc, product) => acc + product.quantity,
      0,
    );
  }

  setProductQty({ target }) {
    const { id, title, price, thumbnail, getTotalPrice } = this.props;
    const localProducts = getProductsFromLocalStorage();
    const foundProduct = localProducts.find((p) => p.id === id);

    if (!foundProduct) {
      const productDataToAdd = { id, title, price, thumbnail, quantity: 1 };
      const localProductsUpdated = [...localProducts, productDataToAdd];
      const productsQty = this.setProductsQty(localProductsUpdated);
      localStorage.setItem('productsQty', productsQty);
      setProductsToLocalStorage(localProductsUpdated);
    } else {
      const { testid } = target.dataset;
      if (testid === 'product-decrease-quantity') {
        const localProductsUpdated = localProducts
          .map((p) => this.handleProductQty(p, foundProduct, 'decrease'));
        const productsQty = this.setProductsQty(localProductsUpdated);
        localStorage.setItem('productsQty', productsQty);
        setProductsToLocalStorage(localProductsUpdated);
        if (getTotalPrice) {
          getTotalPrice();
        }
      } else {
        const localProductsUpdated = localProducts
          .map((p) => this.handleProductQty(p, foundProduct, 'increase'));
        const productsQty = this.setProductsQty(localProductsUpdated);
        localStorage.setItem('productsQty', productsQty);
        setProductsToLocalStorage(localProductsUpdated);
        if (getTotalPrice) {
          getTotalPrice();
        }
      }
    }
  }

  validateValue(value) {
    if (value <= 0) {
      this.setState({ productQuantity: 0 });
    }
  }

  render() {
    const { productQuantity } = this.state;
    const {
      id,
      thumbnail,
      title,
      price,
      testIdAddToCard,
      qtyShoppingCart,
      testIdProductName,
      avaliableQty,
      showDeleteProductButton,
      showProductsQty,
      showAddProductToCardButton,
      showHandleQuantityButtons,
      removeItem,
      standardItem,
    } = this.props;

    const renderQtyShoppingCart = showProductsQty ? (
      <span data-testid="shopping-cart-product-quantity">
        Quantidade:
        {' '}
        {qtyShoppingCart}
      </span>
    ) : ('');
    const renderAvaliableQty = avaliableQty ? (
      <S.AvaliableQtyWrapper>
        <div>Quantidade Disponível</div>
        <div>{avaliableQty}</div>
      </S.AvaliableQtyWrapper>
    ) : ('');
    const renderDeleteProductButton = showDeleteProductButton ? (
      <S.RemoveProduct
        shoppingCart={ !standardItem }
        type="button"
        onClick={ removeItem }
      >
        Remover Produto
      </S.RemoveProduct>
    ) : ('');
    const renderAddProductCartButton = showAddProductToCardButton ? (
      <S.AddProduct
        shoppingCart={ !standardItem }
        onClick={ this.setProductQty }
        type="button"
        data-testid={ testIdAddToCard }
      >
        Adicionar ao carrinho
      </S.AddProduct>
    ) : ('');
    const renderProductQuantity = showHandleQuantityButtons ? (
      <S.ProductsQtyWrapper>
        <S.HandleQty
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.setProductQty }
        >
          -
        </S.HandleQty>
        <div data-testid="shopping-cart-product-quantity">{ productQuantity }</div>
        <S.HandleQty
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.setProductQty }
        >
          +
        </S.HandleQty>
      </S.ProductsQtyWrapper>
    ) : ('');

    return (
      <S.CardWrapper
        shoppingCart={ !standardItem }
        key={ id }
        data-testid="product"
        data-product-id={ id }
      >
        <S.CardImage shoppingCart={ !standardItem } src={ thumbnail } alt={ title } />
        <S.CardTitle data-testid={ testIdProductName }>{title}</S.CardTitle>
        <S.CardPrice>
          R$
          {' '}
          {price.toString().replace('.', ',')}
        </S.CardPrice>
        {renderQtyShoppingCart}
        {renderAvaliableQty}
        {renderProductQuantity}
        <S.ButtonsWrapper shoppingCart={ !standardItem }>
          {renderAddProductCartButton}
          <Link to={ `/products/${id}` } data-testid="product-detail-link">
            Ver detalhes do produto
          </Link>
          {renderDeleteProductButton}
        </S.ButtonsWrapper>
      </S.CardWrapper>
    );
  }
}

ProductListItem.defaultProps = {
  id: '',
  price: 0,
  thumbnail: '',
  title: '',
  qtyShoppingCart: 0,
  testIdAddToCard: 'product-add-to-cart',
  testIdProductName: 'shopping-cart-product-name',
  avaliableQty: 0,
  showDeleteProductButton: false,
  showProductsQty: false,
  showAddProductToCardButton: true,
  showHandleQuantityButtons: false,
  standardItem: false,
  removeItem: null,
  getTotalPrice: null,
};

ProductListItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  qtyShoppingCart: PropTypes.number,
  testIdProductName: PropTypes.string,
  testIdAddToCard: PropTypes.string,
  avaliableQty: PropTypes.number,
  showDeleteProductButton: PropTypes.bool,
  showProductsQty: PropTypes.bool,
  showAddProductToCardButton: PropTypes.bool,
  showHandleQuantityButtons: PropTypes.bool,
  standardItem: PropTypes.bool,
  removeItem: PropTypes.func,
  getTotalPrice: PropTypes.func,
};
