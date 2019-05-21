/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navBar">
        <button type="submit" onClick={this.props.back}>
        back
        </button>
        <button type="submit">1</button>
        <button type="submit" onClick={this.props.next}>
        forward
        </button>
      </div>
    );
  }
}

export default NavBar;
