import React from 'react';

import TopBarDesktop from 'components/TopBarDesktop';
import TopBarMobile from 'components/TopBarMobile';
import Footer from 'components/Footer';

import {
  Desc,
  MainWrapper,
  SectionName,
  Input,
  InputName,
  Textarea,
  SendButton,
  Form,
  TextAlternativeSend,
  TextBold,
} from './styles';

const ContactTemplate = () => (
  <>
    <TopBarDesktop />
    <TopBarMobile />
    <MainWrapper>
      <SectionName>Kontakt</SectionName>
      <Desc>jeśli masz jakąś sprawę do mnie to zapraszam do kontaktu</Desc>
      <Form>
        <InputName>Twój mail</InputName>
        <Input type="email" placeholder="jan.kowalski@gmail.com" />
        <InputName>Temat</InputName>
        <Input type="text" />
        <InputName>Treść</InputName>
        <Textarea rows="6" />
        <SendButton>wyślij</SendButton>
      </Form>
      <TextAlternativeSend>
        Jeśłi nie możesz skożystać z formulaża to zapraszam do kontaktu na email{' '}
        <br /> <TextBold>brudplast@gmail.com</TextBold>
      </TextAlternativeSend>
    </MainWrapper>
    <Footer />
  </>
);

export default ContactTemplate;
