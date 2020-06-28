import React from 'react';
import { shallow } from 'enzyme';
import { News } from '../../../src/containers/News/News';
import NewsContent from '../../../src/containers/News/NewsContent';

describe('News', () => {
  it('Renders the News Page', () => {
    const wrapper = shallow(<News />);
    expect(wrapper.find(NewsContent).exists()).toBe(true);
    expect(wrapper.find(NewsContent).dive().find('main.news').exists()).toBe(true);
  });
});
