/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
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
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {
    axios.get(`/review/${122}`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

  render() {
    const [one, two, three, four, five, six] = this.state.rating;
    return (
      <section className="container">
        <div className="topReview">
          <div className="houseStars">
            <h2 className="numReviews">
              <span className="reviewStar">
                76 Reviews
              </span>
            </h2>
            <div>
              <span>
                <Stars />
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
              <Ratings rating={one} />
              <Ratings rating={two} />
              <Ratings rating={three} />
            </div>
            <div className="rightStars">
              <Ratings rating={four} />
              <Ratings rating={five} />
              <Ratings rating={six} />
            </div>
          </div>
          <ReviewList />
          <div className="bottomNav">
            <div className="scrollBar">
              <span>
                <NavBar />
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
