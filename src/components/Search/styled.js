import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputItem = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  margin-right: 0.5rem;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s;
  -webkit-transition: 0.3s;

  width: 300px;
  height: 40px;
  left: 454px;
  top: 525px;

  input:focus {
    border: 1.3px solid #a3a0a0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  gap: 10px;

  width: 100px;
  height: 40px;
  left: 454px;
  top: 601px;

  background-color: var(--contrast);
  border-radius: 5px;
  font-weight: bolder;
  color: #ffffff;
  border: none;
  transition: background-color 0.5s ease;

  :hover {
    background-color: var(--contrast2);
  }
`;
