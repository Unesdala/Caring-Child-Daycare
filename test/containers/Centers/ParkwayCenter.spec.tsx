/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { ParkwayCenter } from 'src/containers/Centers/Parkway/ParkwayCenter';
import ParkwayCenterContent from 'src/containers/Centers/Parkway/ParkwayCenterContent';

describe('Parkway Center', () => {
  const wrapper = shallow(<ParkwayCenter />);
  it('renders', () => {
    expect(wrapper.find(ParkwayCenterContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ParkwayCenterContent).dive().find('main.parkway-main--content').exists()).toBe(true);
  });
  
});
