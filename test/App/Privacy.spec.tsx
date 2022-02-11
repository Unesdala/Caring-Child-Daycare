
import { shallow } from 'enzyme';
import Privacy from 'src/App/Privacy';

function setup() {
  const props = {};
  const wrapper = shallow(<Privacy />);
  return { wrapper, props };
}

describe('/404', () => {
  it('renders the component', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div.Site-content').exists()).toBe(true);
  });
});
