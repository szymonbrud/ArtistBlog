import React from 'react';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';

import {
  Back,
  BackToMainText,
  UnderText,
  Wrapper,
  Four,
  Text404,
  Zero,
} from './styles';

const Page404 = () => (
  <>
    <TopBarMobile />
    <TopBarDesktop />
    <Wrapper>
      <Text404>
        <Four>4</Four>
        <Zero>0</Zero>
        <Four>4</Four>
      </Text404>
      <UnderText>chyba trochę pobłądziłeś</UnderText>
      <BackToMainText>wróć do strony głównej</BackToMainText>
      <Back to="/">wróć</Back>
    </Wrapper>
  </>
);

export default Page404;
