import React from 'react';
import { shallow } from 'enzyme';
import { AfterSchool } from '../../../src/containers/Programs/AfterSchool/AfterSchool';
import AfterSchoolContent from '../../../src/containers/Programs/AfterSchool/AfterSchoolContent';

describe('AfterSchool', () => {
  it('Renders the AfterSchool Page', () => {
    const wrapper = shallow(<AfterSchool />);
    expect(wrapper.find(AfterSchoolContent).exists()).toBe(true);
    expect(wrapper.find(AfterSchoolContent).dive().find('main.after-school').exists()).toBe(true);
  });
});
