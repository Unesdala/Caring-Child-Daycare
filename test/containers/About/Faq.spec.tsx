/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { FAQ } from 'src/containers/About/FAQ/FAQ';
import FAQContent from 'src/containers/About/FAQ/FAQContent';

describe('FAQ', () => {
  const wrapper = shallow(<FAQ />);
  it('renders', () => {
    expect(wrapper.find(FAQContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FAQContent).dive().find('main.faq-main--content').exists()).toBe(true);
  });
  
});
