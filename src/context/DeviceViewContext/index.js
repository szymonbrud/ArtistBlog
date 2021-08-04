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

const DeviceViewContext = React.createContext(defaultContext);

export const DeviceViewContextProvider = ({ children }) => {
  const [context, setContext] = useState({ defaultContext });

  const setAllDiviceSettings = () => {
    const pageWidth = window.outerWidth;
    const pageHeight = window.outerHeight;

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

  window.addEventListener('resize', debounce(setAllDiviceSettings, 150));

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
