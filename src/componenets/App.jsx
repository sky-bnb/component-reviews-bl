/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`/review/${122}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

  render() {
    return (
      <div>
       hi
      </div>
    );
  }
}

export default App;
