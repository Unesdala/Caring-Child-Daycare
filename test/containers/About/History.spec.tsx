/* eslint-disable @typescript-eslint/no-explicit-any */

import { shallow } from 'enzyme';
import { History } from 'src/containers/About/History/History';
import HistoryContent from 'src/containers/About/History/HistoryContent';

describe('History', () => {
  const wrapper = shallow(<History />);
  it('renders', () => {
    expect(wrapper.find(HistoryContent).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(HistoryContent).dive().find('main.history-main--content').exists()).toBe(true);
  });
  
});
