/* eslint-disable react/prop-types */
import React from 'react';
import '../ReviewListEntry.css';

const ReviewListEntry = ({ review }) => (
  <div className="eachReview">
    <div className="top">
      <div className="userAv">
        <img src={review.avatar} alt="" />
      </div>
      <div className="userInfo">
        <div className="userName">
          {review.name}
        </div>
        <div className="reviewDate">
          {review.date_created}
        </div>
      </div>
    </div>
    <div className="mid">
      <div className="description">
        {review.review}
      </div>
    </div>
    <div className="bottom">
      <div className="line">&nbsp;</div>
    </div>
  </div>
);

export default ReviewListEntry;
