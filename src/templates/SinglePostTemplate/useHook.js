import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const devicesSizes = [360, 834, 1440, 1920];
const deviceTypes = ['phone', 'tablet', 'smallDesktop', 'largeDesktop'];

const useHook = () => {
  const [deviceType, setDeviceType] = useState('');
  const [width, setWidth] = useState(0);

  const setAllDiviceSettings = () => {
    const pageWidth = window.outerWidth;

    let currentDevice = null;

    devicesSizes.forEach((size, index) => {
      if (pageWidth >= size) {
        currentDevice = index;
      }
    });

    setWidth(pageWidth);
    setDeviceType(deviceTypes[currentDevice]);
  };

  useEffect(() => {
    setAllDiviceSettings();
  }, []);

  window.addEventListener('resize', debounce(setAllDiviceSettings, 150));

  return {
    width,
    deviceType,
  };
};

export default useHook;
