import React from 'react';
import { shallow } from 'enzyme';
import { Contact } from '../../../src/containers/Contact/Contact';
import ContactContent from '../../../src/containers/Contact/ContactContent';

describe('Contact', () => {
  it('Renders the Contact Page', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(ContactContent).exists()).toBe(true);
    expect(wrapper.find(ContactContent).dive().find('main.contact').exists()).toBe(true);
  });
});
