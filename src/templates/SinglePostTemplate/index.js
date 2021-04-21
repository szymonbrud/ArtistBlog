import React, { useContext, useState } from 'react';

import parse from 'html-react-parser';

import debounce from 'lodash.debounce';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import Footer from 'components/Footer';

import GlobalStyleProvider from 'styles/globalStyles';

import DeviceViewContext, { DeviceViewContextProvider } from 'context';

import {
  Content,
  DateAndTimeWrapper,
  Image,
  MainWrapper,
  Point,
  SmallText,
  Title,
  CategoryItem,
  CategoryWrapper,
  Line,
  AuthorContent,
  AuthorSectionName,
  TitleAndTimeWrapper,
} from './styles';

import './style.css';

const devicesSizes = [360, 834, 1440, 1920];

const SinglePostTemplateWrapper = ({ children }) => (
  <GlobalStyleProvider>
    <DeviceViewContextProvider>{children}</DeviceViewContextProvider>
  </GlobalStyleProvider>
);

const SinglePostTemplate = ({ pageContext }) => {
  const deviceContext = useContext(DeviceViewContext);

  const [deviceType, setDiviceType] = useState('');
  const [width, setWidth] = useState(0);

  console.log(deviceContext);

  const {
    category,
    date,
    id,
    image,
    readTime,
    shortDesc,
    title,
    content,
  } = pageContext.postData;

  const setAllDiviceSettings = () => {
    const pageWidth = window.outerWidth;
    const pageHeight = window.outerHeight;

    let currentDevice = null;

    console.log(pageWidth);

    devicesSizes.forEach((size, index) => {
      if (pageWidth >= size) {
        currentDevice = index;
      }
    });

    setWidth(pageWidth);
    setDiviceType(deviceContext.deviceTypes[currentDevice]);
  };

  React.useEffect(() => {
    setAllDiviceSettings();
  }, []);

  window.addEventListener('resize', debounce(setAllDiviceSettings, 150));

  console.log(deviceType);

  console.log(content);

  let marginForLeft = null;

  if (deviceType === 'tablet') {
    marginForLeft = (width - 674) / 2;
  } else if (deviceType === 'smallDesktop') {
    marginForLeft = (width - 968) / 2 <= 305 ? 302 : (width - 968) / 2;
  } else if (deviceType === 'largeDesktop') {
    marginForLeft = (width - 968) / 2;
  }

  console.log('margin left');
  console.log(marginForLeft);

  return (
    <SinglePostTemplateWrapper>
      <>
        <TopBarMobile />
        <TopBarDesktop />
        <MainWrapper marginForLeft={marginForLeft}>
          <Image src={image.url} />
          <TitleAndTimeWrapper>
            <Title>{title}</Title>
            <DateAndTimeWrapper>
              <SmallText>{readTime} minut czytania</SmallText>
              <Point />
              <SmallText>
                {`${date[0] + date[1] + date[2] + date[3]}.${
                  date[5] + date[6]
                }.${date[8] + date[9]}`}
              </SmallText>
            </DateAndTimeWrapper>
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
        <Footer />
      </>
    </SinglePostTemplateWrapper>
  );
};

export default SinglePostTemplate;
