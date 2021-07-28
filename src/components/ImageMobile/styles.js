import styled from 'styled-components';

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
