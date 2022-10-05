import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import * as S from './styled';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <S.LayoutWrapper>
        <Header />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.LayoutWrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
