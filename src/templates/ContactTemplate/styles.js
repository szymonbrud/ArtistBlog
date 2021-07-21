import styled from 'styled-components';
import media from 'styles/media';

export const MainWrapper = styled.section`
  padding: 75px 32px 100px;
  background-color: ${({ theme }) => theme.colors.background_gray};

  ${media.tablet`
    padding: 127px calc((100% - 375px) / 2) 158px;
  `}

  ${media.smallDesktop`
    padding: 244px 0 154px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `}
`;

export const SectionAndDescWrapper = styled.div`
  ${media.smallDesktop`
    width: 450px;
    justify-self: end;
    align-self: end;
    margin: 0 0 43px 0;
  `}
`;

export const SectionName = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin: 0;

  ${media.smallDesktop`
    font-size: 48px;
  `}
`;

export const Desc = styled.h4`
  font-size: 18px;
  font-weight: 300;
  margin: 40px 0 0 0;

  ${media.smallDesktop`
    font-size: 24px;
  `}
`;

export const InputName = styled.p`
  font-weight: 300;
  font-size: 18px;
  margin: 30px 0 0 0;

  :first-child {
    margin: 92px 0 0 0;
  }

  ${media.smallDesktop`
    :first-child {
      margin: 0;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${media.smallDesktop`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    justify-self: start;
    margin-left: 60px;
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: ${({ theme }) => theme.colors.black_22} 1px solid;
  color: black;
  font-weight: 300;
  font-size: 16px;
  padding: 0 20px;
  margin-top: 8px;

  :invalid {
    border: 1px solid #da4f4f;
  }

  :focus {
    border: 2px solid black;
    outline: 0;
    padding: 0 19px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.contact_placeholder_text};
  }

  ${media.smallDesktop`
    width: 375px;
  `}
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.black_22} 1px solid;
  margin: 8px 0 0 0;
  resize: none;
  position: relative;

  :focus {
    outline: 3;
    outline-color: black;
    outline-style: solid;
    outline-width: 2px;
    outline-offset: -2px;
  }

  ${media.smallDesktop`
    width: 375px;
  `}
`;

export const SendButton = styled.button`
  width: 135px;
  height: 50px;
  background-color: black;
  border: 0;
  color: white;
  font-size: 18px;
  font-weight: 100;
  margin: 30px 0 0;
  align-self: center;
  cursor: pointer;

  :disabled {
    border: 1px solid black;
    color: black;
    background-color: white;
    cursor: unset;
  }
`;

export const TextAlternativeSend = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 77px 0 0;

  ${media.tablet`
    margin: 127px 0 0;
  `}

  ${media.smallDesktop`
    width: 390px;
    justify-self: end;
    align-self: start;
    margin: 43px 60px 0 0;
  `}
`;

export const TextBold = styled.span`
  font-weight: 500;
`;
