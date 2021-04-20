import styled from 'styled-components';

import media from 'styles/media';

export const MainContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.colors.background_gray};
  display: flex;
  padding: 0 0 150px;
`;

export const CategoryWrapper = styled.div`
  width: 287px;
  padding: 190px 75px 0 90px;
  box-sizing: content-box;
  display: none;

  ${media.tablet`
    display: block;
  `}

  ${media.smallDesktop`
    width: 416px;
    padding: 390px 75px 0 163px;
  `}
`;

export const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.colors.background_gray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 55px 32px 0;

  ${media.tablet`
    width: 307px;
    padding: ${({ marginForLeft }) => `127px 0 0 ${marginForLeft}px`};
    box-sizing: content-box;
  `}

  ${media.smallDesktop`
    width: 416px;
    padding: ${({ marginForLeft }) => `250px 0 0 ${marginForLeft}px`};
  `}
`;

export const SectionTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 24px;
  margin: 0 0 37px 0;

  ${media.smallDesktop`
    font-size: 40px;
    margin: 0 0 100px 0;
  `}
`;
