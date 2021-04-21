import styled, { css } from 'styled-components';
import media from 'styles/media';

export const MainWrapper = styled.div`
  padding: 31px 32px 130px;
  background-color: ${({ theme }) => theme.colors.background_gray};

  ${({ marginForLeft }) =>
    marginForLeft &&
    css`
      padding: 31px ${marginForLeft}px 130px;

      ${media.smallDesktop`
        padding: 155px ${marginForLeft}px 130px;
      `}
    `}
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 300;
  font-size: 18px;
  margin: 26px 0 0 0;

  ${media.smallDesktop`
    font-size: 30px;
    margin: 0 94px 0 0;
  `}
`;

export const DateAndTimeWrapper = styled.div`
  margin: 22px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;

  ${media.smallDesktop`
    margin: 0;
  `}
`;

export const SmallText = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black_65};
`;

export const Point = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 100px;
  background: black;
  margin: 0 10px;
`;

export const Content = styled.p`
  margin: 46px 0 0 0;
  font-size: 15px;
  font-weight: 300;

  ${media.tablet`
    font-size: 18px;
  `}

  ${media.smallDesktop`
    margin: 54px 0 0 0;
  `}
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.light_gray_search};
  margin: 83px 0 47px;

  ${media.smallDesktop`
    margin: 97px 0 38px;
  `}
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  width: 100%;
`;

export const CategoryItem = styled.div`
  padding: 9px 23px;
  background: ${({ theme }) => theme.colors.gray_background_buttons};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black_buttons_text};
`;

export const AuthorSectionName = styled.h5`
  font-size: 18px;
  font-weight: 300;
  margin: 84px 0 0 0;
`;

export const AuthorContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 17px 0 0 0;
`;

export const TitleAndTimeWrapper = styled.div`
  display: block;

  ${media.smallDesktop`
    display: flex;
    align-items: flex-start;
    margin-top: 48px;
    justify-content: space-between;
  `}
`;
