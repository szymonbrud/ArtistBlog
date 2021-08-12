import React, { useEffect, useState } from 'react';
import propTypes, { element } from 'prop-types';

import debounce from 'lodash.debounce';

const devicesSizes = [360, 834, 1440, 1920];

const defaultContext = {
  deviceTypes: ['phone', 'tablet', 'smallDesktop', 'largeDesktop'],
  deviceType: '',
  width: 0,
  height: 0,
};

const isBrowser = () => typeof window !== 'undefined';

const DeviceViewContext = React.createContext(defaultContext);

export const DeviceViewContextProvider = ({ children }) => {
  const [context, setContext] = useState({ defaultContext });

  const setAllDiviceSettings = () => {
    const pageWidth = isBrowser() ? window.outerWidth : 0;
    const pageHeight = isBrowser() ? window.outerHeight : 0;

    let currentDevice = null;

    devicesSizes.forEach((size, index) => {
      if (pageWidth >= size) {
        currentDevice = index;
      }
    });

    setContext({
      ...defaultContext,
      deviceType: defaultContext.deviceTypes[currentDevice],
      width: pageWidth,
      height: pageHeight,
    });
  };

  useEffect(() => {
    setAllDiviceSettings();
  }, []);

  if (isBrowser()) {
    window.addEventListener('resize', debounce(setAllDiviceSettings, 150));
  }

  return (
    <DeviceViewContext.Provider value={context}>
      {children}
    </DeviceViewContext.Provider>
  );
};

DeviceViewContextProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(element), element])
    .isRequired,
};

export default DeviceViewContext;
