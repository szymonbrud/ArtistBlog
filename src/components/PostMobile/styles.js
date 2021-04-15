import styled from 'styled-components';

export const PostWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  margin: 26px 0 0 0;
`;

export const Description = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.black_80};
  font-weight: 400;
  margin: 9px 0 0 0;
`;

export const DateAndTimeWrapper = styled.div`
  margin: 28px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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