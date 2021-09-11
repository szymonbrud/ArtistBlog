import styled, { css } from 'styled-components';

import Img from 'gatsby-image';

export const PostWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ isSmallMargin }) => (isSmallMargin ? '30px' : '90px')};

  ${({ isSmallMargin }) =>
    isSmallMargin &&
    css`
      padding: 26px 20px;
      box-sizing: content-box;
      position: relative;
      left: -20px;
    `}

  cursor: pointer;

  ${({ isSmallMargin }) =>
    isSmallMargin
      ? css`
          :hover {
            background-color: ${({ theme }) =>
              theme.colors.gray_background_dark};
            /* padding: 26px 20px;
            position: relative;
            left: -20px; */
            box-sizing: content-box;
          }
        `
      : css`
          :hover {
            background-color: ${({ theme }) =>
              theme.colors.gray_background_dark};
            padding: 40px 20px;
            box-sizing: content-box;
            position: relative;
            top: -40px;
            left: -20px;
            margin-bottom: 10px;
          }
        `}
`;

export const Image = styled(Img)`
  width: 100%;
  height: 100vmin;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin: 0 0 0 0;
`;

export const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.black_80};
  font-weight: 400;
  margin: 9px 0 0 0;
`;
