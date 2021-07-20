import styled from 'styled-components';

export const MainWrapper = styled.section`
  padding: 75px 32px 100px;
  background-color: ${({ theme }) => theme.colors.background_gray};
`;

export const SectionName = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin: 0;
`;

export const Desc = styled.h4`
  font-size: 18px;
  font-weight: 300;
  margin: 40px 0 0 0;
`;

export const InputName = styled.p`
  font-weight: 300;
  font-size: 18px;
  margin: 30px 0 0 0;

  :first-child {
    margin: 92px 0 0 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

  :focus {
    border: 2px solid black;
    outline: 0;
    padding: 0 19px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.contact_placeholder_text};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  border: ${({ theme }) => theme.colors.black_22} 1px solid;
  margin: 8px 0 0 0;
  resize: none;

  :focus {
    border: 2px solid black;
    outline: 0;
  }
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
`;

export const TextAlternativeSend = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin: 77px 0 0;
`;

export const TextBold = styled.span`
  font-weight: 500;
`;
