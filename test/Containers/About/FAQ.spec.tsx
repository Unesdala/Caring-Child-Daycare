import React from 'react';
import { shallow } from 'enzyme';
import { FAQ } from '../../../src/containers/About/FAQ/FAQ';
import FAQContent from '../../../src/containers/About/FAQ/FAQContent';

describe('FAQ', () => {
  it('Renders the FAQ Page', () => {
    const wrapper = shallow(<FAQ />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(FAQContent).exists()).toBe(true);
    expect(wrapper.find(FAQContent).dive().find('main.faq').exists()).toBe(true);
  });
});
