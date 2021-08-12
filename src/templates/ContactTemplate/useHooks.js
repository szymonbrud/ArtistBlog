import { useState, useRef } from 'react';

const useHooks = () => {
  const emailInputRef = useRef(null);
  const topicInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const [isTextCopied, setIsTextCopied] = useState(false);

  const inputsRef = {
    emailInputRef,
    topicInputRef,
    contentInputRef,
  };

  const [isSendButtonDisabled, setIsButtonSendDisabled] = useState(true);

  const validateForm = () => {
    const isValidated = Object.keys(inputsRef).every(
      (inputRefElement) =>
        inputsRef[inputRefElement] &&
        inputsRef[inputRefElement].current.value.length > 0
    );

    if (isValidated) {
      setIsButtonSendDisabled(false);
    } else {
      setIsButtonSendDisabled(true);
    }
  };

  const copyText = () => {
    navigator.clipboard
      .writeText('plastpage@gmail.com')
      .then(() => {
        if (!isTextCopied) {
          setTimeout(() => {
            setIsTextCopied(false);
          }, 4000);
          setIsTextCopied(true);
        }
      })
      .catch(() => console.error('Could not coppy the text!'));
  };

  return {
    inputsRef,
    validateForm,
    isSendButtonDisabled,
    copyText,
    isTextCopied,
  };
};

export default useHooks;
