import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <section>
        <header>Componente Header aqui</header>
        <main>{children}</main>
      </section>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
