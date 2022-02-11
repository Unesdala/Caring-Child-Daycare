/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { SummerCamp } from 'src/containers/Programs/SummerCamp/SummerCamp';
import SummerCampContent from 'src/containers/Programs/SummerCamp/SummerCampContent';

describe('Summer Camp', () => {
  const wrapper = shallow(<SummerCamp />);
  it('renders', () => {
    expect(wrapper.find(SummerCampContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SummerCampContent).dive().find('main.summer-camp-main--content').exists()).toBe(true);
  });
  
});
