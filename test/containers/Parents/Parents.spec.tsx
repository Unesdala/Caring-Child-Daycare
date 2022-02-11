/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { Parents } from 'src/containers/Parents/Parents';
import ParentsContent from 'src/containers/Parents/ParentsContent';

describe('Parents', () => {
  const wrapper = shallow(<Parents />);
  it('renders', () => {
    expect(wrapper.find(ParentsContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ParentsContent).dive().find('main.parents-corner-main--content').exists()).toBe(true);
  });
  
});
