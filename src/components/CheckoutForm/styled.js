import styled from 'styled-components';
import { FormWrapper, Input } from '../../pages/ProductDetails/styled';
import { Button } from '../Search/styled';

export const CheckoutFormWrapper = styled(FormWrapper)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;
  height: 350px;
`;

export const InputWrapper = styled(Input)``;

export const SelectWrapper = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s;
  -webkit-transition: 0.3s;

  width: 250px;
  height: 45px;
  left: 454px;
  top: 525px;

  :focus {
    border: 1.3px solid #a3a0a0;
  }
`;

export const Fieldset = styled.fieldset`
  width: 250px;
  padding: 30px;
  border: 1px solid #eaeaea;
  border-radius: 5px;

  legend {
    padding: 0 0.5rem;
    margin: 0 0.5rem;
  }
`;

export const SubmitButton = styled(Button)`
  margin: 0 1rem;
`;
