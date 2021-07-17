/* eslint consistent-return: "off" */

import React, { useState, useContext } from 'react';
import DeviceViewContext from 'context';
import propTypes from 'prop-types';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';

import {
  MainWrapper,
  Description,
  Image,
  Title,
  Button,
  ButtonsWrapper,
  Line,
  CloseButton,
  DesktopPosstionWrapper,
  TitleAndDescWrapper,
  Date,
  TitleDescPositionWrapper,
} from './styles';

const SpecificViewImage = ({ galleries, currImage, close }) => {
  const [currImg, setCurrImg] = useState(currImage);

  const devicesContext = useContext(DeviceViewContext);

  const switchImage = (direction) => {
    if (direction === 'next') {
      if (galleries.length - 1 === currImg) {
        setCurrImg(0);
      } else {
        setCurrImg((prev) => prev + 1);
      }
    } else if (currImg === 0) {
      setCurrImg(galleries.length - 1);
    } else {
      setCurrImg((prev) => prev - 1);
    }
  };

  const imageSize = () => {
    if (
      devicesContext.deviceType === 'smallDesktop' ||
      devicesContext.deviceType === 'largeDesktop'
    ) {
      const imgHeight = galleries[currImg].image.height;
      const imgWidth = galleries[currImg].image.width;

      if (imgWidth / imgHeight > 1) {
        return {
          width: window.outerWidth * 0.45,
          height: (window.outerWidth * 0.45) / (imgWidth / imgHeight),
        };
      }
      return {
        height: window.outerHeight * 0.6,
        width: (window.outerHeight * 0.6) / (imgHeight / imgWidth),
      };
    }
  };

  const closeByTarget = (event) =>
    event.target === event.currentTarget && close();

  return (
    <MainWrapper onClick={closeByTarget}>
      <TopBarMobile />
      <TopBarDesktop />
      <CloseButton onClick={close}>close</CloseButton>
      <DesktopPosstionWrapper onClick={closeByTarget}>
        <Image src={galleries[currImg].image.url} style={imageSize()} />
        <TitleAndDescWrapper>
          <TitleDescPositionWrapper>
            <Title>{galleries[currImg].title}</Title>
            <Description>{galleries[currImg].desc}</Description>
          </TitleDescPositionWrapper>
          <Date>18.02.2020</Date>
        </TitleAndDescWrapper>
      </DesktopPosstionWrapper>
      <ButtonsWrapper onClick={closeByTarget}>
        <Button onClick={() => switchImage('prev')}>prev</Button>
        <Line />
        <Button onClick={() => switchImage('next')}>next</Button>
      </ButtonsWrapper>
    </MainWrapper>
  );
};

SpecificViewImage.propTypes = {
  currImage: propTypes.number.isRequired,
  close: propTypes.func.isRequired,
  galleries: propTypes.arrayOf(
    propTypes.shape({
      desc: propTypes.string,
      id: propTypes.string,
      image: propTypes.shape({
        height: propTypes.number,
        url: propTypes.string,
        width: propTypes.number,
      }),
      title: propTypes.string,
    })
  ).isRequired,
};

export default SpecificViewImage;
