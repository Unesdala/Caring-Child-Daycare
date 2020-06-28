import React from 'react';
import { shallow } from 'enzyme';
import { Homepage } from '../../../src/containers/Homepage/Homepage';
import HomepageContent from '../../../src/containers/Homepage/HomepageContent';
import Footer from '../../../src/components/Footer/Footer';

describe('Home', () => {
  const wrapper = shallow(<Homepage />);
  it('Renders the homepage', () => {
    wrapper.instance().forceUpdate();
    expect(wrapper.find(HomepageContent).exists()).toBe(true);
    expect(wrapper.find(HomepageContent).dive().find('main.homepage').exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
    expect(wrapper.find(Footer).dive().find('footer#main-footer').exists()).toBe(true);
  });
});
