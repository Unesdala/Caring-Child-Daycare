import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const AboutNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown
      nav
      isOpen={isOpen} toggle={toggle}
    >
      <DropdownToggle
        caret
        nav
        className="no-hover-color"
      >
        About Us
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>About Caring Child</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/caring-child-history" tag={RRNavLink} onClick={toggle}>
            Caring Child Daycare&apos;s History
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/curriculum" tag={RRNavLink} onClick={toggle}>
            Curriculum
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/faq" tag={RRNavLink} onClick={toggle}>
            FAQ
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { AboutNav };