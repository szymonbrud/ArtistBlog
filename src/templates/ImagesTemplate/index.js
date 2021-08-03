import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SpecificViewContext from 'context/SpecificViewContext';

import {
  SectionTitle,
  MainWrapper,
  Image,
  ImageMoreButton,
  ImageWrapper,
  ImagesWrapper,
} from './styles';

const graphqlQuary = graphql`
  {
    swapi {
      galleries(orderBy: publishedAt_DESC) {
        id
        image {
          url
          height
          width
        }
        title
        desc
      }
    }
  }
`;

const ImagesTemplate = () => {
  const {
    swapi: { galleries },
  } = useStaticQuery(graphqlQuary);

  const { setCurrentImageAndGalleries, currentImage } = useContext(
    SpecificViewContext
  );

  return (
    <MainWrapper isScrollAllow={currentImage !== -1}>
      <SectionTitle>Sztuka</SectionTitle>
      <ImagesWrapper>
        {galleries.map(({ image, id }, index) => (
          <ImageWrapper
            key={id}
            onClick={() => setCurrentImageAndGalleries(index, galleries)}
          >
            <Image imageURL={image.url} />
            <ImageMoreButton>więcej</ImageMoreButton>
          </ImageWrapper>
        ))}
      </ImagesWrapper>
    </MainWrapper>
  );
};

export default ImagesTemplate;
