import React from 'react';

import useHooks from './useHooks';

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
  SectionAndDescWrapper,
} from './styles';

const ContactTemplate = () => {
  const { inputsRef, isSendButtonDisabled, validateForm } = useHooks();

  return (
    <MainWrapper>
      <SectionAndDescWrapper>
        <SectionName>Kontakt</SectionName>
        <Desc>jeśli masz jakąś sprawę do mnie to zapraszam do kontaktu</Desc>
      </SectionAndDescWrapper>
      <Form action={process.env.GATSBY_FORM_API_KEY} method="POST">
        <InputName>Twój mail</InputName>
        <Input
          type="email"
          placeholder="jan.kowalski@gmail.com"
          ref={inputsRef.emailInputRef}
          onChange={validateForm}
          name="_replyto"
        />
        <InputName>Temat</InputName>
        <Input
          type="text"
          ref={inputsRef.topicInputRef}
          onChange={validateForm}
          name="Temat"
        />
        <InputName>Treść</InputName>
        <Textarea
          rows="6"
          ref={inputsRef.contentInputRef}
          onChange={validateForm}
          name="Treść"
        />
        <SendButton disabled={isSendButtonDisabled}>wyślij</SendButton>
      </Form>
      <TextAlternativeSend>
        Jeśli nie możesz skożystać z formulaża to zapraszam do kontaktu na email{' '}
        <br /> <TextBold>plastpage@gmail.com</TextBold>
      </TextAlternativeSend>
    </MainWrapper>
  );
};

export default ContactTemplate;
