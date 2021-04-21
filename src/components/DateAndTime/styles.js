import styled from 'styled-components';
import media from 'styles/media';

export const DateAndTimeWrapper = styled.div`
  margin: 22px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;

  ${media.smallDesktop`
    margin: 0;
  `}

  ${({ wrapperstyles }) => wrapperstyles};
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
