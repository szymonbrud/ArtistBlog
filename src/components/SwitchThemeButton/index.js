import React, { useState } from 'react';
import propTypes from 'prop-types';

import {
  SwitchButtonWrapper,
  CircleInsideButton,
  SwitchThemeWrapper,
} from './styles';

const SwitchThemeButton = ({ styleForMainWrapper }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  return (
    <SwitchThemeWrapper
      styleForMainWrapper={styleForMainWrapper}
      darkTheme={isThemeDark}
    >
      <SwitchButtonWrapper
        onClick={() => setIsThemeDark((prev) => !prev)}
        darkTheme={isThemeDark}
      >
        <CircleInsideButton darkTheme={isThemeDark} />
      </SwitchButtonWrapper>
    </SwitchThemeWrapper>
  );
};

SwitchThemeButton.propTypes = {
  styleForMainWrapper: propTypes.resetWarningCache,
};

SwitchThemeButton.defaultProps = {
  styleForMainWrapper: '',
};

export default SwitchThemeButton;
