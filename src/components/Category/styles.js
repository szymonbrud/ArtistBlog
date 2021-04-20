import styled, { css } from 'styled-components';

import media from 'styles/media';

export const MainWrapper = styled.nav`
  display: none;

  max-width: 100%;
  flex-direction: column;

  ${media.tablet`
    display: flex;
  `}
`;

export const Text = styled.p`
  color: black;
  font-size: 18px;
  margin: 0 0 51px 0;
`;

export const CategoriesItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  /* height: 100%; */
  flex-basis: 0;
`;

export const CategoryItem = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.black_65};
  color: ${({ theme }) => theme.colors.black_65};
  padding: 9px 23px;
  background: ${({ theme }) => theme.colors.gray_background_dark};
  font-size: 16px;
  height: 37px;
  margin: 0;

  :focus {
    outline: 0;
  }

  :hover {
    color: black;
    border: 1px solid black;
    background: white;
  }

  transition: background 0.1s, color 0.1s, border 0.1s;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid black;
      color: rgba(255, 255, 255, 0.9);
      background: black;

      :hover {
        border: 1px solid ${({ theme }) => theme.colors.black_65};
        color: rgba(255, 255, 255, 0.9);
        background: ${({ theme }) => theme.colors.black_65};
      }
    `}
`;

export const Line = styled.div`
  margin: 123px 0 0 0;
  width: 100%;
  height: 1px;
  background: black;
`;
