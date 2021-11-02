import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import media from 'styles/media';

export const ImageWrapper = styled.article`
  margin: 0 0 28px 0;
  padding: 0 0 10px 0;
  width: 100%;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
`;

export const More = styled.p`
  margin: 8px 0 0 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black_65};
  font-weight: 400;
`;

export const GatsbyImage = styled(Img)`
  width: 100%;
  height: 350px;
  overflow: hidden;

  ${({ imageAspectRatio }) =>
    imageAspectRatio &&
    css`
      @media (min-width: 450px) {
        height: ${420 / imageAspectRatio}px;
      }
      ${media.tablet`
      height: ${307 / imageAspectRatio}px;
    `}
      ${media.smallDesktop`
      height: ${416 / imageAspectRatio}px;
    `}
    `}
`;
