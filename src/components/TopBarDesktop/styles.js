import styled, { css } from 'styled-components';
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

export const MenuItems = styled.li`
  font-weight: 100;
  color: white;
  font-size: 18px;
  margin: 0 0 0 80px;

  :first-child {
    margin: 0 0 0 124px;

    ${media.largeDesktop`
      margin: ${({ marginLeftSize }) => `0 0 0 ${marginLeftSize - 348}px`};
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
`;

export const SearchIcon = styled.img``;

export const SwitchThemeWrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 65px;
`;

export const SwitchButtonWrapper = styled.button`
  width: 38px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background_gray};
  border-radius: 96px;
  border: none;
`;

export const CircleInsideButton = styled.div`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 15px;
  height: 15px;
  margin-left: -4px;
`;
