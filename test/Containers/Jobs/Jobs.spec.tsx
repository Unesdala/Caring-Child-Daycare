import React from 'react';
import { shallow } from 'enzyme';
import { Jobs } from '../../../src/containers/Jobs/Jobs';
import JobsContent from '../../../src/containers/Jobs/JobsContent';

describe('Jobs', () => {
  it('Renders the Jobs Page', () => {
    const wrapper = shallow(<Jobs />);
    expect(wrapper.find(JobsContent).exists()).toBe(true);
    expect(wrapper.find(JobsContent).dive().find('main.jobs').exists()).toBe(true);
  });
});
