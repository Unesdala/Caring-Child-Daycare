import React from 'react';
import { shallow } from 'enzyme';
import { Testimonials } from '../../../src/containers/Parents/Testimonials/Testimonials';
import TestimonialsContent from '../../../src/containers/Parents/Testimonials/TestimonialsContent';

describe('About', () => {
  it('Renders the Parent Resources Page', () => {
    const wrapper = shallow(<Testimonials />);
    expect(wrapper.find(TestimonialsContent).exists()).toBe(true);
    expect(wrapper.find(TestimonialsContent).dive().find('main.testimonials').exists()).toBe(true);
  });
});
