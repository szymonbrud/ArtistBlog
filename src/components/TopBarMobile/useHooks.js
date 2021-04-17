import { useState } from 'react';

const useHooks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
  };
};

export default useHooks;
