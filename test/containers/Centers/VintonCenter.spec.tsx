/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { VintonCenter } from 'src/containers/Centers/Vinton/VintonCenter';
import VintonCenterContent from 'src/containers/Centers/Vinton/VintonCenterContent';

describe('Vinton Center', () => {
  const wrapper = shallow(<VintonCenter />);
  it('renders', () => {
    expect(wrapper.find(VintonCenterContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(VintonCenterContent).dive().find('main.vinton-main--content').exists()).toBe(true);
  });
  
});
