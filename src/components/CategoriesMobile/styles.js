import styled, { css } from 'styled-components';

import media from 'styles/media';

const CategoryButtonStyles = styled.button`
  background: black;
  width: 133px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  border: none;
  transform-origin: top left;
  transform: rotate(-90deg);

  :focus {
    outline: 0;
  }
`;

export const OpenButton = styled(CategoryButtonStyles)`
  position: fixed;
  left: 0;
  bottom: 41%;

  z-index: 4;

  transition: left 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      left: -45px;
    `}

  ${media.tablet`
    display: none;
  `}
`;

export const InsideButton = styled(CategoryButtonStyles)`
  position: absolute;
  left: 0;
  top: 133px;
  background-color: ${({ theme }) => theme.colors.background_dark_categories};
`;

export const MainWrapper = styled.section`
  z-index: 3;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  ${media.tablet`
    display: none;
  `}
`;

export const CloseSection = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  right: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      right: 0;
    `}
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background_dark_categories};
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 74px 20px 80px 66px;

  bottom: -100%;

  transition: bottom 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      bottom: 0;
    `}
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  margin: 0 0 59px 0;
`;

export const CategoriesItemsWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  height: 100%;
  flex-basis: 0;
`;

export const CategoryItem = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.white_65};
  color: ${({ theme }) => theme.colors.white_65};
  padding: 9px 23px;
  background: ${({ theme }) => theme.colors.black_65};
  font-size: 16px;
  height: 37px;
  margin: 0;

  :focus {
    outline: 0;
  }

  transition: background 0.1s, color 0.1s, border 0.1s;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid white;
      color: black;
      background: white;
    `}
`;
