import React from 'react';

const useHook = () => {
  const processTheMdx = (text) => {
    console.log(text);
  };

  return {
    processTheMdx,
  };
};

export default useHook;
