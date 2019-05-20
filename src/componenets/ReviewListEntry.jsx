import React from 'react';

const ReviewListEntry = () => (
  <div className="eachReview">
    <div className="top">
      <div className="userAv">
        image goes here
      </div>
      <div className="userInfo">
        <div className="userName">
          Brian
        </div>
        <div className="reviewDate">
          April 2019
        </div>
      </div>
      <div className="mid">
        <div>
          this is where the description goes
        </div>
      </div>
      <div className="bottom">
        <div>
          ----------------------line goes here
        </div>
      </div>
    </div>
  </div>
);

export default ReviewListEntry;
