import styled from 'styled-components';
import { AddProduct } from '../../components/ProductListItem/styled';

export const SectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CartItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 3.5rem 2.5rem;
  margin-top: 3rem;
`;

export const TotalWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 2.5rem;
  margin-top: 3rem;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 0;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem 0;
  }
`;

export const CheckoutButton = styled(AddProduct)`
  margin: 0.5rem 0;
`;
