import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
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
  width: 90px;
  height: 90px;
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
`;

export const AddProduct = styled.button`
  width: 100%;
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
