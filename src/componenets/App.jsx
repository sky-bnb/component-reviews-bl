/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import '../App.css';

import Stars from './Stars';
import AllReviews from './AllReviews';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchData();
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
    return (
      <section className="container">
        <div className="topReview">
          <div className="houseStars">
            76 REVIEWS STAR STAR STAR
          </div>
          <div className="search">
            <div>
              <div className="magnifi">
                Goes here
              </div>
              <div className="input">
                <input type="text" className="inputBox" placeholder="Search reviews" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottomReview">
          <div className="allStars">
            <div className="leftStars">
              <Stars />
              <Stars />
              <Stars />
            </div>
            <div className="rightStars">
              <Stars />
              <Stars />
              <Stars />
            </div>
          </div>
          <AllReviews />
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
