
import { shallow } from 'enzyme';
import { Navigation } from 'src/components/Navigation/Navbar';
import DesktopMenu from 'src/components/Navigation/DesktopMenu';
import MobileMenu from 'src/components/Navigation/MobileMenu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const targetRef: any = {};
const wrapper = shallow<Navigation>(<Navigation targetRef={targetRef} width={1200} />);

describe('Navigation', () => {
  it('Renders the Navbar', () => {
    expect(wrapper.find(DesktopMenu).exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(DesktopMenu).dive().find('ul.menu-nav').exists()).toBe(true);
  });
  it('Renders the Navbar on cellphone width', () => {
    const wrapper2 = shallow<Navigation>(<Navigation targetRef={targetRef} width={320} />);
    expect(wrapper2.find(MobileMenu).exists()).toBe(true);
    expect(wrapper2).toMatchSnapshot();
  });
});