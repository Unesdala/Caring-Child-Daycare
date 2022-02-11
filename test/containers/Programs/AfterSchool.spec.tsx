/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { AfterSchool } from 'src/containers/Programs/AfterSchool/AfterSchool';
import AfterSchoolContent from 'src/containers/Programs/AfterSchool/AfterSchoolContent';

describe('Afterschool', () => {
  const wrapper = shallow(<AfterSchool />);
  it('renders', () => {
    expect(wrapper.find(AfterSchoolContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(AfterSchoolContent).dive().find('main.after-school-main--content').exists()).toBe(true);
  });
  
});
