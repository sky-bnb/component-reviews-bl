/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ reviews, filter, lookFor }) => (
  <div className="allReviews">
    {reviews.map((review, key) => (
      <ReviewListEntry
        key={key}
        review={review}
        filter={filter}
        lookFor={lookFor}
      />
    ))
    }
  </div>
);

export default ReviewList;
