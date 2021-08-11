/* eslint consistent-return: "off" */

import React, { useState, useContext, useEffect } from 'react';
import DeviceViewContext from 'context/DeviceViewContext';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';

import SpecificViewContext from 'context/SpecificViewContext';

import arrowRight from 'images/arrow_right.svg';

import {
  MainWrapper,
  Description,
  Image,
  Title,
  Button,
  ButtonsWrapper,
  Line,
  DesktopPosstionWrapper,
  TitleAndDescWrapper,
  Date,
  TitleDescPositionWrapper,
  MobileButtonMenu,
  ArrowIcon,
  MobileCloseButton,
  MobileNavButton,
} from './styles';

const SpecificViewImage = () => {
  const devicesContext = useContext(DeviceViewContext);
  const { galleries, currentImage, close } = useContext(SpecificViewContext);

  const [currImg, setCurrImg] = useState(currentImage);

  useEffect(() => {
    setCurrImg(currentImage);
  }, [currentImage]);

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
    <MainWrapper onClick={closeByTarget} isOpen={currImg !== -1}>
      {currImg !== -1 && galleries !== null && (
        <>
          <TopBarMobile />
          <TopBarDesktop />
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
          <MobileButtonMenu>
            <MobileNavButton onClick={() => switchImage('prev')}>
              <ArrowIcon src={arrowRight} alt="prev photo" left />
            </MobileNavButton>
            <MobileCloseButton onClick={close}>close</MobileCloseButton>
            <MobileNavButton onClick={() => switchImage('next')}>
              <ArrowIcon src={arrowRight} alt="next photo" />
            </MobileNavButton>
          </MobileButtonMenu>
        </>
      )}
    </MainWrapper>
  );
};

export default SpecificViewImage;
