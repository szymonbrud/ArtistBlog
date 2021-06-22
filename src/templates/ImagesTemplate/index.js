import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import Footer from 'components/Footer';

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

  return (
    <>
      <TopBarMobile />
      <TopBarDesktop />
      <MainWrapper>
        <SectionTitle>Sztuka</SectionTitle>
        <ImagesWrapper>
          {galleries.map(({ image, id }) => (
            <ImageWrapper key={id}>
              <Image imageURL={image.url} />
              <ImageMoreButton>więcej</ImageMoreButton>
            </ImageWrapper>
          ))}
        </ImagesWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default ImagesTemplate;
