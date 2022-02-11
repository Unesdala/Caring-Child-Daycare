/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { PreSchool } from 'src/containers/Programs/PreSchool/PreSchool';
import PreSchoolContent from 'src/containers/Programs/PreSchool/PreSchoolContent';

describe('PreSchool', () => {
  const wrapper = shallow(<PreSchool />);
  it('renders', () => {
    expect(wrapper.find(PreSchoolContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(PreSchoolContent).dive().find('main.pre-school-main--content').exists()).toBe(true);
  });
  
});
