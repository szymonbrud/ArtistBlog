import styled, { css } from 'styled-components';

import media from 'styles/media';
import Img from 'gatsby-image';

export const MainWrapper = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_gray};
  padding: 55px 0;

  ${media.tablet`
    display: flex;
    justify-content: center;
    min-height: 60vh;
    flex-direction: column;
  `}

  ${media.smallDesktop`
    padding-bottom: 100px;
    min-height: 130vh;
  `}

  ${({ isScrollAllow }) =>
    isScrollAllow &&
    css`
      scroll
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
    `}
`;

export const SectionTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin: 0 0 37px 32px;

  ${media.tablet`
    margin: 0 0 100px calc((100vw - 680px ) - ((100vw - 680px ) / 2));
  `}

  ${media.smallDesktop`
    font-size: 40px;
    margin: 0 0 100px calc((100vw - 1190px + 80px * 2) / 2);
  `}
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 62px;

  ${media.tablet`
    display: flex;
    margin: 0 auto;
    gap: 40px;
    width: 840px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    padding: 0 80px;
  `}

  ${media.smallDesktop`
    width: 1176px;
    gap: 58px;
  `}
`;

export const ImageWrapper = styled.div`
  ${media.tablet`
    width: 200px;
    height: 200px;
  `}

  ${media.smallDesktop`
    width: 300px;
    height: 300px;
  `}
`;

export const ImageMoreButton = styled.p`
  margin: 10px 0 0 23px;
  color: ${({ theme }) => theme.colors.black_65};
  font-size: 15px;

  ${media.tablet`
    display: none;
  `}
`;

export const GatsbyImage = styled(Img)`
  overflow: hidden;

  width: 100%;
  height: 100vw;
  background-position: center;
  background-size: cover;
  background-image: url(${({ imageURL }) => imageURL});

  cursor: pointer;

  ${media.tablet`
    width: 200px;
    height: 200px;
    
    transition: transform .1s;

    :hover{
      transform: scale(1.05);
    }
  `}

  ${media.smallDesktop`
    width: 300px;
    height: 300px;
  `}
`;
