import React from 'react';
import { shallow } from 'enzyme';
import { Programs } from '../../../src/containers/Programs/Programs';
import ProgramsContent from '../../../src/containers/Programs/ProgramsContent';

describe('Programs', () => {
  it('Renders the Programs Page', () => {
    const wrapper = shallow(<Programs />);
    expect(wrapper.find(ProgramsContent).exists()).toBe(true);
    expect(wrapper.find(ProgramsContent).dive().find('main.programs').exists()).toBe(true);
  });
});
