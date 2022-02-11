/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Infants } from 'src/containers/Programs/Infants/Infants';
import InfantsContent from 'src/containers/Programs/Infants/InfantsContent';

describe('Infants', () => {
  const wrapper = shallow(<Infants />);
  it('renders', () => {
    expect(wrapper.find(InfantsContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(InfantsContent).dive().find('main.infants-main--content').exists()).toBe(true);
  });
  
});
