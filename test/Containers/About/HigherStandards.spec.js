import React from 'react';
import { shallow } from 'enzyme';
import { HigherStandards } from '../../../src/containers/About/HigherStandards/HigherStandards';
import HigherStandardsContent from '../../../src/containers/About/HigherStandards/HigherStandardsContent';

describe('Higher Standards', () => {
  it('Renders the HigherStandards Page', () => {
    const wrapper = shallow(<HigherStandards />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(HigherStandardsContent).exists()).toBe(true);
    expect(wrapper.find(HigherStandardsContent).dive().find('main.standards').exists()).toBe(true);
  });
});
