import React from 'react';
import propTypes from 'prop-types';

import { Image, ImageWrapper, More } from './styles';

// TODO: dodać prop types
const ImageMobile = ({ imageData, openImage }) => {
  const { image, title } = imageData;

  return (
    <ImageWrapper onClick={openImage}>
      <Image src={image.url} alt={title} />
      <More>Więcej</More>
    </ImageWrapper>
  );
};

ImageMobile.propTypes = {
  imageData: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    image: propTypes.shape({
      url: propTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ImageMobile;
