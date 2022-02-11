/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { FourSixtyCenter } from 'src/containers/Centers/460/460Center';
import FourSixtyCenterContent from 'src/containers/Centers/460/460CenterContent';

describe('Parkway Center', () => {
  const wrapper = shallow(<FourSixtyCenter />);
  it('renders', () => {
    expect(wrapper.find(FourSixtyCenterContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(FourSixtyCenterContent).dive().find('div.introduction-grid').exists()).toBe(true);
  });
  
});
