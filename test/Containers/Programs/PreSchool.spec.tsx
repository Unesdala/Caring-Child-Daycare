import React from 'react';
import { shallow } from 'enzyme';
import { PreSchool } from '../../../src/containers/Programs/PreSchool/PreSchool';
import PreSchoolContent from '../../../src/containers/Programs/PreSchool/PreSchoolContent';

describe('PreSchool', () => {
  it('Renders the PreSchool Page', () => {
    const wrapper = shallow(<PreSchool />);
    expect(wrapper.find(PreSchoolContent).exists()).toBe(true);
    expect(wrapper.find(PreSchoolContent).dive().find('main.pre-school').exists()).toBe(true);
  });
});
