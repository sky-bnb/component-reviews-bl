import React from 'react';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../componenets/App';
import ReviewList from '../componenets/ReviewList';
import NavBar from '../componenets/NavBar';
// import ReviewListEntry from '../componenets/ReviewListEntry';

configure({ adapter: new Adapter() });

describe('Test for App skeleton', () => {
  const wrapper = shallow(<App />);
  it('Should have an div', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
  it('Should have a reviewlist compoenent', () => {
    expect(wrapper.find(ReviewList).length).toBe(1);
  });
  it('should not mount an image in App', () => {
    expect(mount(<App />).hasClass('img')).toBe(false);
  });
});

describe('Test for Navbar functionality', () => {
  const wrapper = shallow(<NavBar />);
  it('Should have buttons', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

// describe('Basic skeleton test for ReviewListEntry component', () => {
//   const wrapper = shallow(<ReviewListEntry />);
//   it('should have an image', () => {
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });
