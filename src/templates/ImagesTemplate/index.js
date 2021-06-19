import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import Footer from 'components/Footer';

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
      <Footer />
    </>
  );
};

export default ImagesTemplate;
