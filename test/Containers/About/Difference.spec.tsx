import React from 'react';
import { shallow } from 'enzyme';
import { CaringChildDifference } from '../../../src/containers/About/Difference/Difference';
import DifferenceContent from '../../../src/containers/About/Difference/DifferenceContent';

describe('Difference', () => {
  it('Renders the Difference Page', () => {
    const wrapper = shallow(<CaringChildDifference />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(DifferenceContent).exists()).toBe(true);
    expect(wrapper.find(DifferenceContent).dive().find('main.difference').exists()).toBe(true);
  });
});
