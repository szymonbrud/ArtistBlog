import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SpecificViewContext from 'context/SpecificViewContext';

import {
  SectionTitle,
  MainWrapper,
  ImageMoreButton,
  ImageWrapper,
  ImagesWrapper,
  GatsbyImage,
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
    allGallery {
      nodes {
        id
        galleryId
        myOwnImg {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600, fit: INSIDE) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const ImagesTemplate = () => {
  const graphqlQueryData = useStaticQuery(graphqlQuary);

  const {
    swapi: { galleries },
  } = graphqlQueryData;

  const {
    allGallery: { nodes: galleryImages },
  } = graphqlQueryData;

  console.log(galleryImages);
  console.log(galleries);

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
            <GatsbyImage
              fixed={
                galleryImages.find((e) => e.galleryId === id).myOwnImg
                  .childImageSharp.fluid
              }
              objectPosition="50% 50%"
            />
            <ImageMoreButton>więcej</ImageMoreButton>
          </ImageWrapper>
        ))}
      </ImagesWrapper>
    </MainWrapper>
  );
};

export default ImagesTemplate;
