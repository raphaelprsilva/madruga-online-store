import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import madrugaLogo from '../../images/logos/madruga-logo.svg';

import * as S from './styled';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalItems: 0,
    };

    this.getProductsQty = this.getProductsQty.bind(this);
  }

  componentDidMount() {
    this.getProductsQty();
  }

  getProductsQty() {
    const productsQty = localStorage.getItem('productsQty');
    if (productsQty) {
      this.setState({ totalItems: productsQty });
    }
  }

  render() {
    const { totalItems } = this.state;

    return (
      <S.HeaderWrapper>
        <Link to="/">
          <S.ImgWrapper
            src={ madrugaLogo }
            title="Madruga Store Logo"
            alt="Letra M maiúscula reprensentando a logo da Madruga Store"
          />
        </Link>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
          title="Ir para o carrinho de compras"
        >
          <S.CartIcon />
          {' '}
          <S.TotalItems data-testid="shopping-cart-size">{totalItems}</S.TotalItems>
        </Link>
      </S.HeaderWrapper>
    );
  }
}

export default Header;
