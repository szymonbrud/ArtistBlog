import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { css } from 'styled-components';

import media from 'styles/media';

import DateAndTime from 'components/DateAndTime';

import { PostWrapper, Image, Title, Description, ImageWrapper } from './styles';

const PostMobile = ({ postData, isSearchTemplate, image }) => {
  const { title, shortDesc, date, readTime } = postData;

  console.log(image);

  const imgWrapperRef = useRef(null);

  useEffect(() => {
    console.log(imgWrapperRef.current.offsetWidth);
  }, []);

  return (
    <PostWrapper isSmallMargin={isSearchTemplate}>
      <Link
        to={`/post/${postData.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ImageWrapper
          ref={imgWrapperRef}
          imageAspectRatio={image.myOwnImg.childImageSharp.fluid.aspectRatio}
        >
          <Image
            fixed={image.myOwnImg.childImageSharp.fluid}
            // objectFit="fit"
            objectPosition="50% 50%"
            alt="Zdj"
            // imgStyle={{ objectFit: 'contain' }}
            imgStyle={{ objectFit: 'contain' }}
            // style={{ margin: '1rem', width: '100vw' }}
          />
        </ImageWrapper>
        {/*{image && <Image src={image.url} />}*/}
        <Title>{title}</Title>
        <Description>{shortDesc}</Description>
        <DateAndTime
          date={date}
          readTime={readTime}
          WrapperStyles={css`
            margin: 28px 0 0 0;

            ${media.smallDesktop`
              margin: 28px 0 0 0;
            `}
          `}
        />
      </Link>
    </PostWrapper>
  );
};

PostMobile.propTypes = {
  postData: propTypes.shape({
    title: propTypes.string.isRequired,
    shortDesc: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    readTime: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
    image: propTypes.shape({
      url: propTypes.string.isRequired,
    }),
  }).isRequired,
  isSearchTemplate: propTypes.bool,
};

PostMobile.defaultProps = {
  isSearchTemplate: false,
};

export default PostMobile;
