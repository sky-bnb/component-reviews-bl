import React from 'react';
import '../NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 'num',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { click } = this.state;
    if (click === 'num') {
      this.setState({ click: 'clicked' });
    } else if (click === 'clicked') {
      this.setState({ click: 'num' });
    }
  }

  render() {
    const {
      back, next, length, searchLength, filter, newPage, page,
    } = this.props;

    const pageNum = [];
    if (filter) {
      for (let i = 1; i <= Math.ceil(searchLength / 7); i += 1) {
        pageNum.push(i);
      }
    } else {
      for (let i = 1; i <= Math.ceil(length / 7); i += 1) {
        pageNum.push(i);
      }
    }


    return (
      <div className="navBar">
        <div>
          <button type="submit" className="nav" onClick={back}>
            <i className="fas fa-chevron-left" />
          </button>
        </div>
        {
          pageNum.map(key => (
            page === key ? (
              <button
                type="submit"
                key={key}
                className="clicked"
                onClick={() => newPage(key)}
              >
                {key}
              </button>
            ) : (
              <button
                type="submit"
                key={key}
                className="num"
                onClick={() => newPage(key)}
              >
                {key}
              </button>
            )
          ))
        }
        <div>
          <button type="submit" className="nav" onClick={next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
