import React from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import Footer from 'components/Footer';
import DateAndTime from 'components/DateAndTime';

import GlobalStyleProvider from 'styles/globalStyles';

import {
  Content,
  Image,
  MainWrapper,
  Title,
  CategoryItem,
  CategoryWrapper,
  Line,
  AuthorContent,
  AuthorSectionName,
  TitleAndTimeWrapper,
} from './styles';

import useHook from './useHook';

import './style.css';

const SinglePostTemplate = ({ pageContext }) => {
  const {
    category,
    date,
    image,
    readTime,
    title,
    content,
  } = pageContext.postData;

  const { deviceType, width } = useHook();

  let marginForLeft = null;

  if (deviceType === 'tablet') {
    marginForLeft = (width - 674) / 2;
  } else if (deviceType === 'smallDesktop') {
    marginForLeft = (width - 968) / 2 <= 305 ? 302 : (width - 968) / 2;
  } else if (deviceType === 'largeDesktop') {
    marginForLeft = (width - 968) / 2;
  }

  return (
    <GlobalStyleProvider>
      <>
        <TopBarMobile />
        <TopBarDesktop deviceSettings={{ width, deviceType }} />
        <MainWrapper marginForLeft={marginForLeft}>
          <Image src={image.url} />
          <TitleAndTimeWrapper>
            <Title>{title}</Title>
            <DateAndTime readTime={readTime} date={date} />
          </TitleAndTimeWrapper>
          <Content>{parse(content && content.html)}</Content>
          <Line />
          <CategoryWrapper>
            {category.map((categ) => (
              <CategoryItem key={categ}>{categ}</CategoryItem>
            ))}
          </CategoryWrapper>
          <AuthorSectionName>Autor</AuthorSectionName>
          <AuthorContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at efficitur nulla. Ut quis turpis turpis. Etiam tempor interdum
            urna ac feugiat. In vehicula quis justo id tincidunt.
          </AuthorContent>
        </MainWrapper>
        <Footer deviceSettings={{ width, deviceType }} />
      </>
    </GlobalStyleProvider>
  );
};

SinglePostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    postData: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.arrayOf(PropTypes.string),
      date: PropTypes.string,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
      readTime: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default SinglePostTemplate;
