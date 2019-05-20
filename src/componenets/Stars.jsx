/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-state */
import React from 'react';
import '../Stars.css';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [],
    };
  }

  componentDidMount() {
    this.stars(25);
  }

  stars(num) {
    let ratings = ['empty', 'empty', 'empty', 'empty', 'empty'];
    let stars;
    let half;
    if (num !== 50 && num <= 50) {
      stars = Math.floor(num / 10);
      half = Math.floor((num - (stars * 10)) / 5);
      for (let i = 0; i < stars; i += 1) {
        ratings[i] = 'full';
      }
      if (half > 0) {
        ratings[stars] = 'half';
      }
      this.setState({ rating: ratings });
      return;
    }
    ratings = ['full', 'full', 'full', 'full', 'full'];
    this.setState({ rating: ratings });
  }

  render() {
    const empty = (
      <div className="empty">
        <i className="fas fa-star" />
      </div>
    );
    const half = (
      <div className="half">
        <i className="fas fa-star" />
        <i className="fas fa-star-half" />
      </div>
    );
    const full = (
      <div>
        <i className="fas fa-star" />
      </div>
    );

    return (
      <div className="starContainer">
        { this.state.rating.map(el => (el === 'empty' ? empty : (el === 'half' ? half : full)))
        }
      </div>
    );
  }
}

export default Stars;
