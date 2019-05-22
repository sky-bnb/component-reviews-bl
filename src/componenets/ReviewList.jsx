/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ reviews }) => (
  <div className="allReviews">
    {reviews.map((review, key) => (
      <ReviewListEntry
        key={key}
        review={review}
      />
    ))
    }
  </div>
);

export default ReviewList;
