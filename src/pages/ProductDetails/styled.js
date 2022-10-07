import styled from 'styled-components';
import { Button } from '../../components/Search/styled';

export const ProductDetailsContainer = styled.section`
  margin-top: 1rem;
  padding: 4rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RatingsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 290px;

  padding: 1.5rem 1rem;
  margin: 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }
`;

export const Input = styled.input`
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

export const UserRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const UserComment = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 0.75rem;

  textarea {
    padding: 0.5rem 1rem;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    margin-top: 0.5rem;
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
  }
`;

export const RatingButton = styled(Button)``;

export const UsersRatingsWrapper = styled(RatingsWrapper)``;

export const UserRating = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  align-items: center;
  justify-content: center;


  margin: 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
  transition: all 0.2s ease;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);

  :hover {
    box-shadow: 0 7.5px 12.5px rgb(0 0 0 / 20%);
  }
`;

export const UserMailRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 0.5rem 0;
`;

export const UserMailRatingItem = styled.div`
  display: flex;
  width: 50%;
  margin-right: 0.5rem;

  div:first-child {
    font-weight: 600;
    padding-right: 0.5rem;
  }
`;
