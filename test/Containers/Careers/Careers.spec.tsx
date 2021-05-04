import React from 'react';
import { shallow } from 'enzyme';
import { Career } from '../../../src/containers/Careers/Careers';
import CareerContent from '../../../src/containers/Careers/CareersContent';

describe('Careers', () => {
  it('Renders the Careers Page', () => {
    const wrapper = shallow(<Career />);
    expect(wrapper.find(CareerContent).exists()).toBe(true);
    expect(wrapper.find(CareerContent).dive().find('main.careers').exists()).toBe(true);
  });
});
