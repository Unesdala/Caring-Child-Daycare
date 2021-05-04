import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink,
} from 'reactstrap';

const CollapsableNav = (): JSX.Element => {
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
            <hr />
            <NavItem className="about-link">
              <NavLink
                to="/daycare/about"
                exact
                activeClassName="active"
                tag={RRNavLink}
                onClick={toggleNavbar}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavLink
              to="/daycare/about/caring-child-history"
              exact
              activeClassName="active"
              tag={RRNavLink}
              onClick={toggleNavbar}
            >
              Caring Child Daycare&apos;s History
            </NavLink>
            <NavLink to="/daycare/about/caring-child-difference" tag={RRNavLink} onClick={toggleNavbar}>
              The Caring Child Difference
            </NavLink>
            <NavLink to="/daycare/about/meeting-higher-standards" tag={RRNavLink} onClick={toggleNavbar}>
              Meeting Higher Standards
            </NavLink>
            <NavLink to="/daycare/about/curriculum" tag={RRNavLink} onClick={toggleNavbar}>
              Curriculum
            </NavLink>
            <NavLink to="/daycare/about/meet-the-teachers" tag={RRNavLink} onClick={toggleNavbar}>
              Meet The Teachers
            </NavLink>
            <NavLink to="/daycare/about/faq" tag={RRNavLink} onClick={toggleNavbar}>
              FAQ
            </NavLink>
            <hr />
            <NavItem>
              <NavLink to="/daycare/programs" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>
                Programs
              </NavLink>
            </NavItem>
            <NavLink to="/daycare/programs/infants-and-toddlers" tag={RRNavLink} onClick={toggleNavbar}>
              Infants &amp; Toddlers
            </NavLink>
            <NavLink to="/daycare/programs/twos" tag={RRNavLink} onClick={toggleNavbar}>
              Twos
            </NavLink>
            <NavLink to="/daycare/programs/preschool" tag={RRNavLink} onClick={toggleNavbar}>
              Preschool
            </NavLink>
            <NavLink to="/daycare/programs/private-pre-k" tag={RRNavLink} onClick={toggleNavbar}>
              Private Pre-K
            </NavLink>
            <NavLink to="/daycare/programs/after-school" tag={RRNavLink} onClick={toggleNavbar}>
              After School
            </NavLink>
            <NavLink to="/daycare/programs/summer-camp" tag={RRNavLink} onClick={toggleNavbar}>
              Summer Camp
            </NavLink>
            <hr />
            <NavItem>
              <NavLink to="/daycare/parents" exact activeClassName="active" tag={RRNavLink} onClick={toggleNavbar}>Parent&apos;s Corner</NavLink>
            </NavItem>
            <NavLink to="/daycare/parents/resources" tag={RRNavLink} onClick={toggleNavbar}>
              Parent Resources
            </NavLink>
            <NavLink to="/daycare/parents/testimonials" tag={RRNavLink} onClick={toggleNavbar}>
              Testimonials
            </NavLink>
            <hr />
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
