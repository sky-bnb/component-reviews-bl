/* eslint-disable react/prop-types */
import React from 'react';
import Stars from './Stars';
import '../Ratings.css';

const Ratings = ({ rating }) => (
  <div className="starRow">
    <div className="word">
      <span>
        {rating}
      </span>
    </div>
    <div className="star">
      <span>
        <Stars />
      </span>
    </div>
  </div>
);

export default Ratings;
