/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import '../ReviewListEntry.css';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    const { review, filter } = this.props;
    this.state = {
      expanded: false,
      boldSearch: review.review,
      search: filter,
    };
  }

  strong(arr, find) {
    // BUGGY BOLD SEARCH FEATURE NEED TO FIX
    const newArr = arr.split(' ');
    const index = newArr.indexOf(find);
    newArr[index] = `<strong>${find}<strong>`;
    // const result = newArr.join(' ');
    // return result;
  }

  render() {
    const { review, lookFor } = this.props;
    const { expanded, boldSearch, search } = this.state;
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
    console.log(search);
    let reviewDescription;
    if (search && lookFor.length > 1) {
      // BUGGY BOLD SEARCH FEATURE NEED TO FIX
      const result = this.strong(boldSearch, lookFor);
      console.log(result);
      // this.setState({ boldSearch: result });
    } else {
      reviewDescription = review.review;
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
            {reviewDescription}
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
