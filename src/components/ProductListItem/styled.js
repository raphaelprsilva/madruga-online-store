import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.shoppingCart ? 'row' : 'column')};
  align-items: center;
  width: ${(props) => (props.shoppingCart ? '800px' : '200px')};
  height: ${(props) => (props.shoppingCart ? '200px' : '300px')};
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: var(--white);
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }

  a {
    text-align: center;
    padding-top: 1rem;
    font-size: 0.8rem;
    color: var(--highlight);
  }
`;

export const CardImage = styled.img`
  width: ${(props) => (props.shoppingCart ? '120px' : '90px')};
  height: ${(props) => (props.shoppingCart ? '120px' : '90px')};
  padding-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  height: 60px;
  width: 166px;
  overflow-y: hidden;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 0.5rem;
`;

export const CardPrice = styled.p`
  padding: 0.5rem 0;
  margin: 0 1rem;
`;

export const AddProduct = styled.button`
  width: ${(props) => (props.shoppingCart ? '130px' : '100%')};
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: var(--contrast);
  color: var(--white);
  font-weight: 600;
  transition: all 0.2s ease;

  :hover {
    background-color: var(--highlight);
  }
`;

export const ProductsQtyWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 120px;
  height: 50px;
  margin: 0.5rem;
`;

export const HandleQty = styled(AddProduct)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const RemoveProduct = styled(AddProduct)`
  background-color: #516df8;
  padding: 0.5rem 0;

  :hover {
    background-color:#3859f7;
  }
`;

export const ButtonsWrapper = styled.div`
  width: ${(props) => (props.shoppingCart ? '200px' : '120px')};
  height: ${(props) => (props.shoppingCart ? '120px' : '40px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 0.5rem 0;
  }
`;
