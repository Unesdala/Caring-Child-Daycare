import React from 'react';
import { shallow } from 'enzyme';
import { Infants } from '../../../src/containers/Programs/Infants/Infants';
import InfantsContent from '../../../src/containers/Programs/Infants/InfantsContent';

describe('Infants', () => {
  it('Renders the Infants Page', () => {
    const wrapper = shallow(<Infants />);
    expect(wrapper.find(InfantsContent).exists()).toBe(true);
    expect(wrapper.find(InfantsContent).dive().find('main.infants').exists()).toBe(true);
  });
});
