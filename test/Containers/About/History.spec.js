import React from 'react';
import { shallow } from 'enzyme';
import { CaringChildHistory } from '../../../src/containers/About/History/History';
import CaringChildHistoryContent from '../../../src/containers/About/History/HistoryContent';

describe('History', () => {
  it('Renders the History Page', () => {
    const wrapper = shallow(<CaringChildHistory />);
    expect(wrapper.find(CaringChildHistoryContent).exists()).toBe(true);
    expect(wrapper.find(CaringChildHistoryContent).dive().find('main.history').exists()).toBe(true);
  });
});
