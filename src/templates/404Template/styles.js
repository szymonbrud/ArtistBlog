import styled from 'styled-components';
import { Link } from 'gatsby';

import media from 'styles/media';

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.colors.background_gray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.smallDesktop`
    height: 100vh;
    background: white;
  `}
`;

export const Text404 = styled.p`
  font-size: 100px;
  font-weight: 900;
  margin: 0;

  ${media.smallDesktop`
    font-size: 160px;
  `}
`;

export const Four = styled.span`
  color: black;
  margin: 0;
`;

export const Zero = styled.span`
  color: ${({ theme }) => theme.colors.background_gray};
  text-shadow: -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000,
    4px 4px 0 #000;
  margin: 0 10px;
`;

export const UnderText = styled.p`
  font-size: 20px;
  font-weight: 100;
  margin: 22px 0 0 0;

  ${media.smallDesktop`
    margin: 7px 0 0 0;
    font-size: 40px;
  `}
`;

export const BackToMainText = styled.p`
  font-size: 18px;
  font-weight: 100;
  margin: 82px 0 0 0;

  ${media.smallDesktop`
    margin: 118px 0 0 0;
  `}
`;

export const Back = styled(Link)`
  background: black;
  width: 135px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 100;
  font-size: 18px;
  margin: 21px 0 0 0;
  text-decoration: none;

  transition: background 0.2s, color 0.2s, border 0.2s;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
