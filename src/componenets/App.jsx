/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React from 'react';
import axios from 'axios';
import '../App.css';

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
      <div className='panda'>
        <p>This text will be blue</p>
      </div>
    );
  }
}

export default App;
