import React, { useState, useEffect } from 'react';
import propTypes, { element } from 'prop-types';

const defaultContext = {
  galleries: null,
  currentImage: -1,
  setCurrentImageAndGalleries: () => {},
  close: () => {},
};

const SpecificViewContext = React.createContext(defaultContext);

export const SpecificViewContextProvider = ({ children }) => {
  const [context, setContext] = useState(defaultContext);

  const setCurrentImageAndGalleries = (curImg, galleries) =>
    setContext((prev) => ({ ...prev, currentImage: curImg, galleries }));

  const close = () =>
    setContext((prev) => ({ ...prev, currentImage: -1, galleries: null }));

  useEffect(() => {
    setContext((prev) => ({
      ...prev,
      setCurrentImageAndGalleries,
      close,
    }));
  }, []);

  return (
    <SpecificViewContext.Provider value={context}>
      {children}
    </SpecificViewContext.Provider>
  );
};

SpecificViewContextProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(element), element])
    .isRequired,
};

export default SpecificViewContext;
