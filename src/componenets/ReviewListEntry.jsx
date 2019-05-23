/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../ReviewListEntry.css';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const { review } = this.props;
    const { expanded } = this.state;
    const toggledClass = expanded ? 'expanded' : 'collapsed';
    const arr = review.review.split(' ');
    let read;

    if (arr.length > 40) {
      read = (
        <div
          className="read"
          onClick={() => this.setState({ expanded: true })}
        >
          {!expanded ? '...Read more' : ''}
        </div>
      );
    }

    return (
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
          <div className={toggledClass}>
            {review.review}
          </div>
          {read}
        </div>
        <div className="bottom">
          <div className="line">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;
