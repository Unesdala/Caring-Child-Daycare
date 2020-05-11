import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, Nav, NavItem, NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const AboutNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar dark>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle dark caret>
            <NavItem><NavLink to="/daycare/about" tag={RRNavLink} onClick={toggle}>About Us</NavLink></NavItem>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/daycare/about/about-caring-child" tag={RRNavLink} onClick={toggle}>
                About Caring Child Daycare
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

export default AboutNav;
