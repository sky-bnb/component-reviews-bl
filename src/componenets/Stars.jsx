/* eslint-disable react/no-unused-state */
/* eslint-disable no-nested-ternary */
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
    setTimeout(() => {
      const { star } = this.props;
      console.log(star);
      this.stars(star);
    }, 200);
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
    const { rating } = this.state;

    return (
      <div className="starContainer">
        { rating.map(el => (el === 'empty' ? empty : (el === 'half' ? half : full)))
        }
      </div>
    );
  }
}

export default Stars;
