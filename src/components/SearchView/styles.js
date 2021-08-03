import styled, { css } from 'styled-components';

import media from 'styles/media';

export const MainWrapper = styled.section`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: calc(100vh - 90px);
  border-top: 1px solid ${({ theme }) => theme.colors.gray_dark};
  overflow-y: auto;
  background: white;
  transform: translateY(100%);

  z-index: 10;

  transition: transform 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0);
    `}

  ${media.tablet`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}

  ${media.smallDesktop`
    border-top: 0;
    background: ${({ theme }) => theme.colors.background_gray_90};
  `}
`;

export const InputWrapper = styled.div`
  margin: 40px 33px 0;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray_search};
  align-items: center;
  padding-bottom: 19px;
  position: relative;

  &:focus-within {
    border-bottom: 1px solid black;
  }

  ${media.tablet`
    width: 550px;
  `}

  ${media.smallDesktop`
    background: white;
    padding: 20px;
    margin: auto 0 auto;

    ${({ isSerached }) =>
      isSerached &&
      css`
        margin: 60px 0 0;
      `}
  `}

  ${({ isNoResoult }) =>
    isNoResoult &&
    css`
      ::before {
        position: absolute;
        top: calc(100% + 30px);
        left: 50%;
        transform: translateX(-50%);
        content: 'Brak rezultatów';
        font-size: 15px;
      }
    `}
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  margin: 0 0 0 15px;

  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray_dark};
    font-weight: 500;
  }

  :focus {
    outline: 0;
  }

  ${media.smallDesktop`
    background: none;
  `}
`;

export const SearchIcon = styled.img`
  width: 17px;
`;

export const PostsWrapper = styled.section`
  padding: 0 33px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    width: 550px;
  `}

  ${media.smallDesktop`
    background: white;
    margin: 0;
    padding: 50px 33px;
  `}
`;

export const CategoryTitle = styled.h3`
  font-weight: 300;
  font-size: 20px;
  margin: 0 0 40px 0;
`;
