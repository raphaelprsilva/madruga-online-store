import styled from 'styled-components';

export const ProductCategoriesWrapper = styled.section`
  width: 18%;
`;

export const ProductList = styled.aside`
  width: 235px;
  height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: fixed;
  z-index: 1;
  top: 136px;
  left: 10px;
  padding: 8px 0;

  padding: 1.5rem;
  border-right: 1px solid #eaeaea;

  div {
    padding: 0.5rem 0;

    button {
      transition: all 0.2s ease-in-out;
    }

    button:hover {
      color: var(--highlight);
    }
  }
`;
