/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Curriculum } from 'src/containers/About/Curriculum/Curriculum';
import CurriculumContent from 'src/containers/About/Curriculum/CurriculumContent';

describe('Curriculum', () => {
  const wrapper = shallow(<Curriculum />);
  it('renders', () => {
    expect(wrapper.find(CurriculumContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CurriculumContent).dive().find('main.curriculum-main--content').exists()).toBe(true);
  });
  
});
