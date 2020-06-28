import React from 'react';
import { shallow } from 'enzyme';
import { Twos } from '../../../src/containers/Programs/Twos/Twos';
import TwosContent from '../../../src/containers/Programs/Twos/TwosContent';

describe('Twos', () => {
  it('Renders the Twos Page', () => {
    const wrapper = shallow(<Twos />);
    expect(wrapper.find(TwosContent).exists()).toBe(true);
    expect(wrapper.find(TwosContent).dive().find('main.twos').exists()).toBe(true);
  });
});
