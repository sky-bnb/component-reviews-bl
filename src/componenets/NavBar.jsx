import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { back } = this.props;
    const { next } = this.props;

    return (
      <div className="navBar">
        <button type="submit" onClick={back}>
        back
        </button>
        <button type="submit">1</button>
        <button type="submit" onClick={next}>
        forward
        </button>
      </div>
    );
  }
}

export default NavBar;
