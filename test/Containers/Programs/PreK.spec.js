import React from 'react';
import { shallow } from 'enzyme';
import { PreK } from '../../../src/containers/Programs/PreK/PreK';
import PreKContent from '../../../src/containers/Programs/PreK/PreKContent';

describe('PreK', () => {
  it('Renders the PreK Page', () => {
    const wrapper = shallow(<PreK />);
    expect(wrapper.find(PreKContent).exists()).toBe(true);
    expect(wrapper.find(PreKContent).dive().find('main.pre-k').exists()).toBe(true);
  });
});
