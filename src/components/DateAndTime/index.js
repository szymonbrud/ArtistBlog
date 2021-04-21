import React from 'react';
import propTypes from 'prop-types';

import { DateAndTimeWrapper, Point, SmallText } from './styles';

const DateAndTime = ({ WrapperStyles, readTime, date }) => (
  <DateAndTimeWrapper wrapperstyles={WrapperStyles}>
    <SmallText>{readTime} minut czytania</SmallText>
    <Point />
    <SmallText>
      {`${date[0] + date[1] + date[2] + date[3]}.${date[5] + date[6]}.${
        date[8] + date[9]
      }`}
    </SmallText>
  </DateAndTimeWrapper>
);

DateAndTime.propTypes = {
  WrapperStyles: propTypes.resetWarningCache,
  readTime: propTypes.number.isRequired,
  date: propTypes.string.isRequired,
};

DateAndTime.defaultProps = {
  WrapperStyles: '',
};

export default DateAndTime;
