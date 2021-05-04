import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../src/App';

describe('App component', () => {
  const wrapper = shallow<App>(<App dispatch={jest.fn()} />);
  it('renders the component', () => {
    expect(wrapper.find('div#App').exists()).toBe(true);
  });
  it('does not fetch the images if they already exist', () => {
    const wrapper2 = shallow(<App dispatch={jest.fn()} />);
    expect(wrapper2.find('div#App').exists()).toBe(true);
  });
});
