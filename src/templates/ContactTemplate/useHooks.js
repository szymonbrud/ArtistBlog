import { useState, useRef } from 'react';

const useHooks = () => {
  const emailInputRef = useRef(null);
  const topicInputRef = useRef(null);
  const contentInputRef = useRef(null);

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

  return {
    inputsRef,
    validateForm,
    isSendButtonDisabled,
  };
};

export default useHooks;
