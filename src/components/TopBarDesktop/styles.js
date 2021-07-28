import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import media from 'styles/media';

export const MainWrapper = styled.nav`
  display: none;

  ${media.smallDesktop`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    z-index: 5;
  `}
`;

export const LogoWrapper = styled.div`
  box-sizing: content-box;
  width: 202px;
  height: 90px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ marginWidth }) =>
    marginWidth &&
    css`
      margin: 0 ${marginWidth}px;
    `}

  ${media.largeDesktop`
    margin: 0 53px;
  `}
`;

export const MenuWrapper = styled.ul`
  background: ${({ theme }) => theme.colors.background_dark_categories};
  height: 90px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  list-style: none;
`;

export const MenuItems = styled(Link)`
  font-weight: 100;
  color: white;
  font-size: 18px;
  margin: 0 0 0 80px;
  text-decoration: none;
  z-index: 1;

  transition: background 0.2s;

  :hover {
    padding: 10px 20px;
    margin: 0 -20px 0 60px;
    border-radius: 5px;
    background: #222;
  }

  :first-child {
    margin: 0 0 0 124px;

    :hover {
      margin: 0 -20px 0 104px;
    }

    ${media.largeDesktop`
      margin: ${({ marginleftsize }) => `0 0 0 ${marginleftsize - 348}px`};

      :hover {
        margin: ${({ marginleftsize }) =>
          `0 -20px 0 ${marginleftsize - 368}px`};
      }
    `}
  }
`;

export const Line = styled.div`
  height: 18px;
  background-color: white;
  width: 1px;
  margin: 0 82px;

  ${media.largeDesktop`
      margin: 0 82px 0 20%;
    `}
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 144px;
  height: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white_50};
  cursor: text;
`;

export const SearchIcon = styled.img``;
