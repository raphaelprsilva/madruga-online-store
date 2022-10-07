import styled from 'styled-components';
import { TotalWrapper } from '../ShoppingCart/styled';

export const MainWrapper = styled.div`
  display: flex;
`;

export const FormTotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 2.5rem;
  margin-top: 3rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

export const TotalPriceWrapper = styled(TotalWrapper)``;

export const CheckoutFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
