import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
} from 'reactstrap';

const CollapsableNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem><NavLink to="/daycare" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>Home</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/centers" tag={RRNavLink} onClick={toggleNavbar}>Our Centers</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/about" tag={RRNavLink} onClick={toggleNavbar}>About Us</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/programs" tag={RRNavLink} onClick={toggleNavbar}>Programs</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/parents" tag={RRNavLink} onClick={toggleNavbar}>Parent&apos;s Corner</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/news" tag={RRNavLink} onClick={toggleNavbar}>News</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/careers" tag={RRNavLink} onClick={toggleNavbar}>Careers</NavLink></NavItem>
            <NavItem><NavLink to="/daycare/contact" tag={RRNavLink} onClick={toggleNavbar}>Contact Us</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CollapsableNav;
