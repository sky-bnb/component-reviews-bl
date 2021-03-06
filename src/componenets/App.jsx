/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
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
      searchedRev: [],
      toggleSearch: [],
      filter: false,
      lookFor: '',
      rendered: false,
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
    // axios.get(`http://127.0.0.1:3001/review/${randomNum(101, 200)}`)
    axios.get(`http://54.219.137.95/review/${randomNum(101, 200)}`)
    // axios.get(`review/${randomNum(101, 200)}`)
      .then(({ data }) => {
        this.setState({ stats: data[0] });
        this.setState({ reviews: data[0].reviews.slice(0, 7) });
        this.setState({ length: data[0].reviews.length });
        this.setState({ rendered: true });
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
          // rev.review = result;
        }
      }
    }
    this.setState({ searchedRev: filter });
    this.setState({ toggleSearch: filter });
    this.setState({ lookFor: search });
    this.setState({ filter: true });
  }

  backToReview(event) {
    event.preventDefault();
    this.setState({ search: '' });
    this.setState({ filter: false });
  }

  window() {
    window.scrollTo({
      top: 1860,
      left: 0,
      behavior: 'smooth',
    });
  }

  back() {
    const {
      page, stats, filter, searchedRev,
    } = this.state;

    let newPage = page;
    let newArr;

    if (filter && page > 1) {
      newPage -= 1;
      this.setState({ page: newPage });
      newArr = searchedRev.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ toggleSearch: newArr });
      this.window();
    } else if (page > 1) {
      newPage -= 1;
      this.setState({ page: newPage });
      newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
      this.window();
    }
  }

  next() {
    const {
      page, stats, filter, searchedRev,
    } = this.state;

    const length = Math.ceil(stats.reviews.length / 7);
    const searchLength = Math.ceil(searchedRev.length / 7);
    let newPage = page;
    let newArr;
    if (filter && page < searchLength) {
      newPage += 1;
      this.setState({ page: page + 1 });
      newArr = searchedRev.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ toggleSearch: newArr });
      this.window();
    } else if (!filter && page < length) {
      newPage += 1;
      this.setState({ page: page + 1 });
      newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
      this.window();
    }
  }

  newPage(pageNum) {
    const { stats, filter, searchedRev } = this.state;
    this.setState({ page: pageNum });
    let newArr;
    if (filter) {
      newArr = searchedRev.slice((pageNum - 1) * 7, pageNum * 7);
      this.setState({ toggleSearch: newArr });
      this.window();
    } else if (!filter) {
      newArr = stats.reviews.slice((pageNum - 1) * 7, pageNum * 7);
      this.setState({ reviews: newArr });
      this.window();
    }
  }

  render() {
    const {
      rating, stats, reviews, page, length, search, searchedRev, filter, lookFor, toggleSearch, rendered,
    } = this.state;
    const [accuracy, communication, cleanliness, location, checkin, value] = rating;

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
              {searchedRev.length}
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
            <Ratings rating={accuracy} star={stats.accuracy} />
            <Ratings rating={communication} star={stats.communication} />
            <Ratings rating={cleanliness} star={stats.cleanliness} />
          </div>
          <div className="rightStars">
            <Ratings rating={location} star={stats.location} />
            <Ratings rating={checkin} star={stats.check_in} />
            <Ratings rating={value} star={stats.value} />
          </div>
        </div>
      );
    }

    return (
      <section>
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
        { rendered
          ? (
            <div className="bottomReview">
              {ratingList}
              {reviewList}
              <div className="bottomNav">
                <div className="scrollBar">
                  <NavBar
                    back={this.back}
                    next={this.next}
                    length={length}
                    searchLength={searchedRev.length}
                    filter={filter}
                    newPage={this.newPage}
                    page={page}
                  />
                </div>
              </div>
            </div>
          ) : <p className="saving"><span>.</span><span>.</span><span>.</span></p>
        }

      </section>
    );
  }
}

export default App;
