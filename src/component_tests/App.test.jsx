import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from '../componenets/App';

configure({ adapter: new Adapter() });

describe('Test for App skeleton', () => {
  const wrapper = shallow(<App />);
  it('Should have an div', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
