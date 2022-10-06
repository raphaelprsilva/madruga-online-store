import styled from 'styled-components';

export const ProductsListWrapper = styled.section`
  width: 82%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 1rem 2rem;
    margin: 1rem 2rem;
    align-content: center;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
