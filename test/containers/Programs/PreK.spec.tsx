/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { PreK } from 'src/containers/Programs/PreK/PreK';
import PreKContent from 'src/containers/Programs/PreK/PreKContent';

describe('PreK', () => {
  const wrapper = shallow(<PreK />);
  it('renders', () => {
    expect(wrapper.find(PreKContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(PreKContent).dive().find('main.pre-k-main--content').exists()).toBe(true);
  });
  
});
