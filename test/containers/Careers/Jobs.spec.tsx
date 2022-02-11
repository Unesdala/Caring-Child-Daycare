/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Jobs } from 'src/containers/Careers/Jobs/Jobs';
import JobsContent from 'src/containers/Careers/Jobs/JobsContent';

describe('Careers', () => {
  const wrapper = shallow(<Jobs />);
  it('renders', () => {
    expect(wrapper.find(JobsContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(JobsContent).dive().find('main.jobs-main--content').exists()).toBe(true);
  });
  
});
