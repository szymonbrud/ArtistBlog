import { Link } from 'gatsby';
import React, { useRef } from 'react';
import propTypes from 'prop-types';
import { css } from 'styled-components';

import media from 'styles/media';

import DateAndTime from 'components/DateAndTime';

import {
  PostWrapper,
  GatsbyImage,
  Title,
  Description,
  ImageWrapper,
} from './styles';

const PostMobile = ({ postData, isSearchTemplate, image }) => {
  const { title, shortDesc, date, readTime } = postData;

  const imgWrapperRef = useRef(null);

  return (
    <PostWrapper isSmallMargin={isSearchTemplate}>
      <Link
        to={`/post/${postData.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <ImageWrapper
          ref={imgWrapperRef}
          imageAspectRatio={image.myOwnImg.childImageSharp.fluid.aspectRatio}
          isSearchTemplate={isSearchTemplate}
        >
          <GatsbyImage
            fixed={image.myOwnImg.childImageSharp.fluid}
            objectPosition="50% 50%"
            alt="Image"
            imgStyle={{ objectFit: 'contain' }}
          />
        </ImageWrapper>
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
  }).isRequired,
  // eslint-disable-next-line
  image: propTypes.any,
  isSearchTemplate: propTypes.bool,
};

PostMobile.defaultProps = {
  isSearchTemplate: false,
};

export default PostMobile;
