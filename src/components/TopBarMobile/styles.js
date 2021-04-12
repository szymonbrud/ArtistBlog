import styled, { css } from 'styled-components';
import media from 'styles/media';

export const Wrapper = styled.nav`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rosarivo', serif;
  font-size: 18px;
  padding: 0 0 0 32px;

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft}px;
    `}
`;

export const BurgerWrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.colors.background_gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
`;

export const Burger = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: content-box;
`;

export const BurgerItem = styled.li`
  width: 26px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black_100};
  margin-top: 6px;

  :first-child {
    margin-top: 0px;
  }
`;

export const SearchWrapper = styled.div`
  display: none;

  ${media.tablet`
    width: 90px;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.background_dark_categories};
    position: fixed;
    right: 90px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchIcon = styled.img`
  width: 17px;
`;
