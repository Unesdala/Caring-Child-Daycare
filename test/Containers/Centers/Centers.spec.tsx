import React from 'react';
import { shallow } from 'enzyme';
import { OurCenters } from '../../../src/containers/Centers/OurCenters';
import OurCentersContent from '../../../src/containers/Centers/OurCentersContent';

describe('OurCenters', () => {
  it('Renders the Centers Page', () => {
    const wrapper = shallow(<OurCenters />);
    expect(wrapper.find(OurCentersContent).exists()).toBe(true);
    expect(wrapper.find(OurCentersContent).dive().find('main.our-centers').exists()).toBe(true);
  });
});
