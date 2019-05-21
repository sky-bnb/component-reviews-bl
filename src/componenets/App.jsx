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
    };
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`/review/${122}`)
      .then(({ data }) => {
        this.setState({ stats: data[0] });
        this.setState({ reviews: data[0].reviews.slice(0, 7) });
        this.setState({ length: data[0].reviews.length });
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

  back() {
    const { page } = this.state;
    const { stats } = this.state;
    if (page > 1) {
      let newPage = page;
      newPage -= 1;
      this.setState({ page: newPage });
      const newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
    }
  }

  next() {
    const { page } = this.state;
    const { stats } = this.state;
    const length = Math.ceil(stats.reviews.length / 7);
    if (page < length) {
      let newPage = page;
      newPage += 1;
      this.setState({ page: page + 1 });
      const newArr = stats.reviews.slice((newPage - 1) * 7, newPage * 7);
      this.setState({ reviews: newArr });
    }
  }

  render() {
    const {
      rating, stats, reviews, length,
    } = this.state;
    const [one, two, three, four, five, six] = rating;

    return (
      <section className="container">
        <div className="topReview">
          <div className="houseStars">
            <h2 className="numReviews">
              <span className="reviewStar">
                {length}
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
            <div className="search">
              <div className="magnifi">
                <i className="fas fa-search" />
              </div>
              <div className="input">
                <input type="text" className="inputBox" placeholder="Search reviews" />
              </div>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="line">&nbsp;</div>
        </div>
        <div className="bottomReview">
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
          <ReviewList reviews={reviews} />
          <div className="bottomNav">
            <div className="scrollBar">
              <span>
                <NavBar back={this.back} next={this.next} length={length} />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
