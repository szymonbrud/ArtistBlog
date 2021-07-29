import React, { useState, useEffect } from 'react';
import propTypes, { element } from 'prop-types';

const defaultContext = {
  isSearchViewOpen: false,
  setIsSearchViewOpen: () => {},
};

const SearchViewContext = React.createContext(defaultContext);

export const SearchViewContextProvider = ({ children }) => {
  const [context, setContext] = useState(defaultContext);

  const setIsSearchViewOpen = (future) =>
    setContext((prev) => ({ ...prev, isSearchViewOpen: future }));

  useEffect(() => {
    setContext({
      ...defaultContext,
      setIsSearchViewOpen,
    });
  }, []);

  return (
    <SearchViewContext.Provider value={context}>
      {children}
    </SearchViewContext.Provider>
  );
};

SearchViewContextProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(element), element])
    .isRequired,
};

export default SearchViewContext;
