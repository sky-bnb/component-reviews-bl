import React from 'react';
import '../ReviewListEntry.css';

const ReviewListEntry = () => (
  <div className="eachReview">
    <div className="top">
      <div className="userAv">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/chris_frees/128.jpg" alt="" />
      </div>
      <div className="userInfo">
        <div className="userName">
          Brian
        </div>
        <div className="reviewDate">
          April 2019
        </div>
      </div>
    </div>
    <div className="mid">
      <div className="description">
      Unfortunately, I cannot recommend this home, the cigarette smell was horrific in the bedroom. Add to that the cheapest linens, towels and uncomfortable beds I have ever seen in a “luxury home”. We literarily had to leave after one night and check into a hotel. For anyone looking for a luxury experience, don’t be fooled by the nice pictures as that does not tell the full story about this home. Living the dream was easy to communicate but unfortunately, don’t “get it” when it comes to what a luxury home renter is really looking for. If you're looking to host a party or show off nice Instagram pictures, this house might work perfectly for you, just don’t expect to sleep here.
      </div>
    </div>
    <div className="bottom">
      <div className="line">&nbsp;</div>
    </div>
  </div>
);

export default ReviewListEntry;
