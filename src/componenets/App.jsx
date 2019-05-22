/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import axios from 'axios';
import '../App.css';

import Ratings from './Ratings';
import ReviewList from './ReviewList';
import NavBar from './NavBar';
import Stars from './Stars';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: ['Accuracy', 'Communication', 'Cleanliness', 'Location', 'Check-in', 'Value'],
      stats: [],
      reviews: [],
      page: 1,
      length: [],
      search: '',
      searchFor: [],
      toggleSearch: [],
      filter: false,
      lookFor: '',
    };
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.newPage = this.newPage.bind(this);
    this.searchFor = this.searchFor.bind(this);
    this.backToReview = this.backToReview.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const randomNum = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);
    axios.get(`/review/${randomNum(100, 200)}`)
      .then(({ data }) => {
        this.setState({ stats: data[0] });
        this.setState({ reviews: data[0].reviews.slice(0, 7) });
        this.setState({ length: data[0].reviews.length });
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

  searchFor(event) {
    event.preventDefault();
    const { stats, search } = this.state;
    this.setState({ page: 1 });
    const filter = stats.reviews.filter((rev) => {
      if (rev.review.includes(search)) {
        return rev;
      }
      return false;
    });
    let result;
    for (let i = 0; i < filter.length; i += 1) {
      const rev = filter[i];
      const newArr = rev.review.split(' ');
      for (let j = 0; j < newArr.length; j += 1) {
        const word = newArr[j];
        if (word === search) {
          newArr[i] = (
            <strong>
              {`${search}`}
            </strong>
          );
          result = newArr.join(' ');
          console.log('this is the result', result);
          // rev.review = result;
        }
      }
    }
    console.log('this is the filter', filter);
    this.setState({ searchFor: filter });
    this.setState({ toggleSearch: filter });
    this.setState({ lookFor: search });
    this.setState({ filter: true });
  }

  backToReview(event) {
    event.preventDefault();
    this.setState({ search: '' });
    this.setState({ filter: false });
  }

  back() {
    const {
      page, stats, filter, searchFor,
    } = this.state;

    let newPage = page;
    let newArr;

    if (filter && page > 1) {
      newPage -= 1;
      this.setState({ page: newPage });
      newArr = searchFor.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ toggleSearch: newArr });
    } else if (page > 1) {
      newPage -= 1;
      this.setState({ page: newPage });
      newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
    }
  }

  next() {
    const {
      page, stats, filter, searchFor,
    } = this.state;

    const length = Math.ceil(stats.reviews.length / 7);
    const searchLength = Math.ceil(searchFor.length / 7);
    let newPage = page;
    let newArr;
    if (filter && page < searchLength) {
      newPage += 1;
      this.setState({ page: page + 1 });
      newArr = searchFor.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ toggleSearch: newArr });
    } else if (!filter && page < length) {
      newPage += 1;
      this.setState({ page: page + 1 });
      newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
    }
  }

  newPage(pageNum) {
    const { stats, filter, searchFor } = this.state;
    this.setState({ page: pageNum });
    let newArr;
    if (filter) {
      newArr = searchFor.slice((pageNum - 1) * 7, pageNum * 7);
      this.setState({ toggleSearch: newArr });
    } else if (!filter) {
      newArr = stats.reviews.slice((pageNum - 1) * 7, pageNum * 7);
      this.setState({ reviews: newArr });
    }
  }

  render() {
    const {
      rating, stats, reviews, page, length, search, searchFor, filter, lookFor, toggleSearch,
    } = this.state;
    const [one, two, three, four, five, six] = rating;

    let find = 'search';
    if (search.length > 0) {
      find = 'find';
    }

    let reviewList;
    let ratingList;
    if (filter) {
      reviewList = (
        <ReviewList reviews={toggleSearch} />
      );
      ratingList = (
        <div>
          <div className="searchFilter">
            <div>
              {searchFor.length}
              {' '}
              {'guests have mentioned'}
              {' '}
              <strong>
                {`"${lookFor}"`}
              </strong>
            </div>
            <div className="backToReview" onClick={this.backToReview}>
              Back to all reviews
            </div>
          </div>
          <div className="border">
            <div className="line">&nbsp;</div>
          </div>
        </div>
      );
    } else {
      reviewList = (
        <ReviewList reviews={reviews} />
      );
      ratingList = (
        <div className="allStars">
          <div className="leftStars">
            <Ratings rating={one} star={stats.accuracy} />
            <Ratings rating={two} star={stats.communication} />
            <Ratings rating={three} star={stats.cleanliness} />
          </div>
          <div className="rightStars">
            <Ratings rating={four} star={stats.location} />
            <Ratings rating={five} star={stats.check_in} />
            <Ratings rating={six} star={stats.value} />
          </div>
        </div>
      );
    }

    return (
      <section className="container">
        <div className="topReview">
          <div className="houseStars">
            <h2 className="numReviews">
              <span className="reviewStar">
                {length}
                {' '}
                {'Reviews'}
              </span>
            </h2>
            <div>
              <span>
                <Stars star={stats.accuracy} />
              </span>
            </div>
          </div>
          <div>
            <div className={find}>
              <div className="magnifi">
                <i className="fas fa-search" />
              </div>
              <form className="input" onSubmit={this.searchFor}>
                <input
                  type="text"
                  className="inputBox"
                  placeholder="Search reviews"
                  onChange={e => this.setState({ search: e.target.value })}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="line">&nbsp;</div>
        </div>
        <div className="bottomReview">
          {ratingList}
          {reviewList}
          <div className="bottomNav">
            <div className="scrollBar">
              <NavBar
                back={this.back}
                next={this.next}
                length={length}
                searchLength={searchFor.length}
                filter={filter}
                newPage={this.newPage}
                page={page}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
