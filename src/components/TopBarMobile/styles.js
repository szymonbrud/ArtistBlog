import { Link } from 'gatsby';
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
  position: relative;
  z-index: 10;

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft}px;
    `}

  ${media.tablet`
        background: white;
      `}

  ${media.smallDesktop`
    display: none;
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
  z-index: 10;
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
  position: relative;
`;

export const BurgerItem = styled.li`
  width: 26px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black_100};
  margin-top: 6px;

  :first-child {
    margin-top: 0px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;

      :first-child {
        display: none;
      }

      :nth-child(2) {
        transform: translate(-50%) rotate(45deg);
      }

      :nth-child(3) {
        transform: translate(-50%) rotate(-45deg);
      }
    `}
`;

export const SearchWrapper = styled.div`
  width: 90px;
  height: 90px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 7;
  background-color: ${({ theme }) => theme.colors.background_dark_categories};
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 0.1s 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(-90px);

      ${media.tablet`
        transform: unset;
      `}
    `}

  ${media.tablet`
      right: 90px;
      top: 0;
  `}
`;

export const SearchIcon = styled.img`
  width: 17px;
`;

export const MenuInsideWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0 0 0;

  overflow: hidden;

  transform-origin: top right;

  transition: transform 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen
      ? css`
          transform: scale(1);
        `
      : css`
          transform: scale(0);
        `};

  ${media.tablet`
    background: ${({ theme }) => theme.colors.background_gray};
  `}
`;

export const MenuItemsLink = styled(Link)`
  font-weight: 300;
  font-size: 24px;
  color: black;
  text-decoration: none;

  margin: 63px 0 0 0;

  ${media.tablet`
    margin: 118px 0 0 0;
  `}

  :first-child {
    margin: 0 0 0 0;
  }
`;
