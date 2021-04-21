import { Link } from 'gatsby';
import React from 'react';
import propTypes from 'prop-types';

import {
  PostWrapper,
  Image,
  Title,
  Description,
  DateAndTimeWrapper,
  SmallText,
  Point,
} from './styles';

const PostMobile = ({ postData }) => {
  const { title, shortDesc, date, readTime, image } = postData;

  return (
    <PostWrapper>
      <Link
        to={`/post/${postData.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Image src={image.url} />
        <Title>{title}</Title>
        <Description>{shortDesc}</Description>
        <DateAndTimeWrapper>
          <SmallText>{readTime} minut czytania</SmallText>
          <Point />
          <SmallText>
            {`${date[0] + date[1] + date[2] + date[3]}.${date[5] + date[6]}.${
              date[8] + date[9]
            }`}
          </SmallText>
        </DateAndTimeWrapper>
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
};

export default PostMobile;
