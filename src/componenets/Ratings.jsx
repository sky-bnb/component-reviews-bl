import React from 'react';
import Stars from './Stars';
import '../Ratings.css';

const Ratings = ({ rating, star }) => (
  <div className="starRow">
    <div className="word">
      <span>
        {rating}
      </span>
    </div>
    <div className="star">
      <span>
        <Stars star={star} />
      </span>
    </div>
  </div>
);

export default Ratings;
