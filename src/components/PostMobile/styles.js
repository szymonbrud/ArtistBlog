import styled from 'styled-components';

export const PostWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;

  :hover {
    background-color: ${({ theme }) => theme.colors.gray_background_dark};
    padding: 40px 20px;
    box-sizing: content-box;
    position: relative;
    top: -40px;
    left: -20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
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
