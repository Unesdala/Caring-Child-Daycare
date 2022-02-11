/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Testimonials } from 'src/containers/Parents/Testimonials/Testimonials';
import TestimonialsContent from 'src/containers/Parents/Testimonials/TestimonialsContent';

describe('Testimonials', () => {
  const wrapper = shallow(<Testimonials />);
  it('renders', () => {
    expect(wrapper.find(TestimonialsContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(TestimonialsContent).dive().find('main.testimonials-main--content').exists()).toBe(true);
  });
});