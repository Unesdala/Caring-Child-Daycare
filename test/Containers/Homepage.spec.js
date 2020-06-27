import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../src/containers/Homepage/Homepage';
import Footer from '../../src/components/Footer/Footer';

describe('Home', () => {
  const wrapper = shallow(<Homepage />);
  it('Renders the homepage', () => {
    wrapper.instance().forceUpdate();
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
