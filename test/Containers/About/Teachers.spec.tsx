import React from 'react';
import { shallow } from 'enzyme';
import { Teachers } from '../../../src/containers/About/Teachers/Teachers';
import TeachersContent from '../../../src/containers/About/Teachers/TeachersContent';

describe('Teachers', () => {
  it('Renders the Teachers Page', () => {
    const wrapper = shallow(<Teachers />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(TeachersContent).exists()).toBe(true);
    expect(wrapper.find(TeachersContent).dive().find('main.teachers').exists()).toBe(true);
  });
});
