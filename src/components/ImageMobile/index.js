import React from 'react';
import propTypes from 'prop-types';

import { ImageWrapper, More, GatsbyImage } from './styles';

const ImageMobile = ({ imageData, openImage, img }) => {
  const { title } = imageData;

  return (
    <ImageWrapper onClick={openImage}>
      <GatsbyImage
        imageAspectRatio={img.myOwnImg.childImageSharp.fluid.aspectRatio}
        fixed={img.myOwnImg.childImageSharp.fluid}
        objectPosition="50% 50%"
        alt={title}
      />
      <More>Więcej</More>
    </ImageWrapper>
  );
};

ImageMobile.propTypes = {
  img: propTypes.any,
  imageData: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    image: propTypes.shape({
      url: propTypes.string.isRequired,
    }),
  }).isRequired,
  openImage: propTypes.func.isRequired,
};

export default ImageMobile;
