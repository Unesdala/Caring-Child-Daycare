import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, Nav, NavItem, NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const AboutNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle caret>
            <NavItem><NavLink to="/daycare/about" tag={RRNavLink} onClick={toggle}>About Us</NavLink></NavItem>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <NavLink to="/daycare/about/caring-child-history" tag={RRNavLink} onClick={toggle}>
                Caring Child Daycare&apos;s History
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/daycare/about/caring-child-difference" tag={RRNavLink} onClick={toggle}>
                The Caring Child Difference
              </NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/daycare/about/meeting-higher-standards" tag={RRNavLink} onClick={toggle}>
                Meeting Higher Standards
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

export default AboutNav;
