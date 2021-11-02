import styled, { css } from 'styled-components';
import Img from 'gatsby-image';

import media from 'styles/media';

export const MainWrapper = styled.section`
  width: 100%;
  min-height: 100%;
  z-index: 40;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background_gray};
  overflow-y: scroll;
  overflow-x: hidden;

  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;

  ::before {
    content: '';
    width: 100%;
    height: 90px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;

    ${media.smallDesktop`
      background-color: ${({ theme }) => theme.colors.background_gray};
    `}
  }

  ${media.smallDesktop`
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background_gray_54};
  `}
`;

export const DesktopPosstionWrapper = styled.div`
  ${media.smallDesktop`
    padding-top: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Image = styled(Img)`
  width: 100%;
  ${media.smallDesktop`
    width: auto;
  `}
`;

export const TitleAndDescWrapper = styled.div`
  padding: 0 20px;

  ${media.smallDesktop`
    background: white;
    overflow-y: auto;
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  `}
`;

export const TitleDescPositionWrapper = styled.div``;

export const Title = styled.h3`
  margin: 42px 0 0 25px;
  font-weight: 500;
  font-size: 18px;

  ${media.tablet`
    margin: 60px 0 0 75px;
    width: calc(100% - 75px * 2);
  `}

  ${media.smallDesktop`
    margin: 0 0 0 75px;
  `}
`;

export const Description = styled.p`
  margin: 24px 0 0 25px;
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 100px;

  ${media.tablet`
    margin: 24px 0 0 75px;
    width: calc(100% - 75px * 2);
  `}

  ${media.smallDesktop`
    padding-bottom: 55px;
  `}
`;

export const Date = styled.p`
  display: none;
  ${media.smallDesktop`
    display: block;
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.black_71};
    margin: 0 0 0 75px;d
  `}
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 55px 0;
  flex-grow: 2;

  display: none;

  ${media.tablet`
    padding: 25px 0 75px 0;
  `}

  ${media.smallDesktop`
    display: flex;
    flex-grow: 0;
    padding: 25px 0 0 0;
  `}
`;

export const Button = styled.button`
  font-size: 18px;
  font-size: 400;
  color: ${({ theme }) => theme.colors.black_65};
  border: 1px solid ${({ theme }) => theme.colors.black_65};
  background: white;
  padding: 15px 34px;

  transition: outline 0.2s;

  cursor: pointer;

  :hover {
    border: 1px solid black;
    color: black;
    outline: 1px solid black;
  }

  &:active {
    color: white;
    background: ${({ theme }) => theme.colors.black_65};
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 18px;
  background: black;
  margin: 0 29px;
`;

export const MobileButtonMenu = styled.nav`
  width: 100%;
  height: 69px;
  background: white;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;

  ${media.smallDesktop`
    display: none;
  `}
`;

const navButtonStyles = css`
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  flex-grow: 1;
`;

export const MobileCloseButton = styled.button`
  ${navButtonStyles};
  background-color: ${({ theme }) => theme.colors.background_gray};
  font-size: 18px;

  transition: background 0.2s, color 0.2s;

  :hover {
    background-color: black;
    color: white;
  }
`;

export const MobileNavButton = styled.button`
  ${navButtonStyles};

  transition: background 0.2s;

  :hover {
    background-color: #e1e1e1;
  }
`;

export const ArrowIcon = styled.img`
  ${({ left }) =>
    left &&
    css`
      transform: rotate(180deg);
    `}
`;
