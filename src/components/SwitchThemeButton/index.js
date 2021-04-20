import React, { useState } from 'react';

import { CSSProp } from 'styled-components';

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
  styleForMainWrapper: CSSProp,
};

SwitchThemeButton.defaultProps = {
  styleForMainWrapper: '',
};

export default SwitchThemeButton;
