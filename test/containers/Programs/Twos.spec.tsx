/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Twos } from 'src/containers/Programs/Twos/Twos';
import TwosContent from 'src/containers/Programs/Twos/TwosContent';

describe('Twos', () => {
  const wrapper = shallow(<Twos />);
  it('renders', () => {
    expect(wrapper.find(TwosContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(TwosContent).dive().find('main.twos-main--content').exists()).toBe(true);
  });
  
});
