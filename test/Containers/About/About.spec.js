import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../../src/containers/About/About';
import AboutContent from '../../../src/containers/About/AboutContent';

describe('About', () => {
  it('Renders the About Page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(AboutContent).exists()).toBe(true);
    expect(wrapper.find(AboutContent).dive().find('main.about').exists()).toBe(true);
  });
});
