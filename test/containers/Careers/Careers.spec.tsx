/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Careers } from 'src/containers/Careers/Careers';
import CareersContent from 'src/containers/Careers/CareersContent';

describe('Careers', () => {
  const wrapper = shallow(<Careers />);
  it('renders', () => {
    expect(wrapper.find(CareersContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CareersContent).dive().find('main.careers-main--content').exists()).toBe(true);
  });
  
});
