import React from 'react';
import { shallow } from 'enzyme';
import { Parents } from '../../../src/containers/Parents/Parents';
import ParentsContent from '../../../src/containers/Parents/ParentsContent';

describe('About', () => {
  it('Renders the Parents Page', () => {
    const wrapper = shallow(<Parents />);
    expect(wrapper.find(ParentsContent).exists()).toBe(true);
    expect(wrapper.find(ParentsContent).dive().find('main.parents-corner').exists()).toBe(true);
  });
});
