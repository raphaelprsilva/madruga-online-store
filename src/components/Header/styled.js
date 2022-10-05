import styled from 'styled-components';
import { CartFill } from 'styled-icons/bootstrap';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 999px;
  align-items: center;
  height: 3.25rem;
  border-bottom: 1px solid var(--borders);
  background-color: var(--black);
  color: var(--texts);

  a {
    padding: 0 2rem;
  }

  a:link, a:visited {
    text-decoration: none;
  }

  a:last-child {
    svg {
      margin: 0 0.5rem;
    }
  }
`;

export const ImgWrapper = styled.img`
  height: 2rem;
  width: 4.25rem;
`;

export const CartIcon = styled(CartFill)`
  color: var(--white);
  height: 1.5rem;
  width: 1.5rem;
`;

export const TotalItems = styled.span`
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  background-color: var(--contrast);
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 50%;
`;
