import React from 'react';
import { shallow } from 'enzyme';
import { Curriculum } from '../../../src/containers/About/Curriculum/Curriculum';
import CurriculumContent from '../../../src/containers/About/Curriculum/CurriculumContent';

describe('Curriculum', () => {
  it('Renders the Curriculum Page', () => {
    const wrapper = shallow(<Curriculum />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(CurriculumContent).exists()).toBe(true);
    expect(wrapper.find(CurriculumContent).dive().find('main.curriculum').exists()).toBe(true);
  });
});
