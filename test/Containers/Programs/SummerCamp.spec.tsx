import React from 'react';
import { shallow } from 'enzyme';
import { SummerCamp } from '../../../src/containers/Programs/SummerCamp/SummerCamp';
import SummerCampContent from '../../../src/containers/Programs/SummerCamp/SummerCampContent';

describe('SummerCamp', () => {
  it('Renders the SummerCamp Page', () => {
    const wrapper = shallow(<SummerCamp />);
    expect(wrapper.find(SummerCampContent).exists()).toBe(true);
    expect(wrapper.find(SummerCampContent).dive().find('main.summer-camp').exists()).toBe(true);
  });
});
