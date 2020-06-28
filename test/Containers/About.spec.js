import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../src/containers/About/About';
import AboutContent from '../../src/containers/About/AboutContent';
import { Curriculum } from '../../src/containers/About/Curriculum/Curriculum';
import CurriculumContent from '../../src/containers/About/Curriculum/CurriculumContent';
import { CaringChildDifference } from '../../src/containers/About/Difference/Difference';
import DifferenceContent from '../../src/containers/About/Difference/DifferenceContent';
import { FAQ } from '../../src/containers/About/FAQ/FAQ';
import FAQContent from '../../src/containers/About/FAQ/FAQContent';
import { HigherStandards } from '../../src/containers/About/HigherStandards/HigherStandards';
import HigherStandardsContent from '../../src/containers/About/HigherStandards/HigherStandardsContent';
import { Teachers } from '../../src/containers/About/Teachers/Teachers';
import TeachersContent from '../../src/containers/About/Teachers/TeachersContent';

describe('About', () => {
  it('Renders the About Page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find(AboutContent).exists()).toBe(true);
    expect(wrapper.find(AboutContent).dive().find('main.about').exists()).toBe(true);
  });
  it('Renders the Curriculum Page', () => {
    const wrapper = shallow(<Curriculum />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(CurriculumContent).exists()).toBe(true);
    expect(wrapper.find(CurriculumContent).dive().find('main.curriculum').exists()).toBe(true);
  });
  it('Renders the Difference Page', () => {
    const wrapper = shallow(<CaringChildDifference />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(DifferenceContent).exists()).toBe(true);
    expect(wrapper.find(DifferenceContent).dive().find('main.difference').exists()).toBe(true);
  });
  it('Renders the FAQ Page', () => {
    const wrapper = shallow(<FAQ />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(FAQContent).exists()).toBe(true);
    expect(wrapper.find(FAQContent).dive().find('main.faq').exists()).toBe(true);
  });
  it('Renders the HigherStandards Page', () => {
    const wrapper = shallow(<HigherStandards />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(HigherStandardsContent).exists()).toBe(true);
    expect(wrapper.find(HigherStandardsContent).dive().find('main.standards').exists()).toBe(true);
  });
  it('Renders the Teachers Page', () => {
    const wrapper = shallow(<Teachers />);
    wrapper.instance().forceUpdate();
    expect(wrapper.find(TeachersContent).exists()).toBe(true);
    expect(wrapper.find(TeachersContent).dive().find('main.teachers').exists()).toBe(true);
  });
});
