import { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavLink,
} from 'reactstrap';
const MobileNav = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar light>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <ul className="menu-nav">
            <li className="nav-item">
              <NavLink 
                to="/" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Home
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink 
                to="/about" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Our Philosophy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about/caring-child-history" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Our History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about/curriculum" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Our Curriculum
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about/faq" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                FAQ
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink 
                to="/programs/infants-and-toddlers" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Infants &amp; Toddlers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/programs/twos" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Twos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/programs/preschool" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Preschool
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/programs/private-pre-k" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Private Pre-K
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/programs/after-school" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                After School
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/programs/summer-camp" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Summer Camp
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink 
                to="/locations/vinton-center" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Vinton Center
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/locations/460-center" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                460 Center
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/locations/parkway-center" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Parkway Center
              </NavLink>
            </li>
            <hr />
            <li className="nav-item">
              <NavLink 
                to="/parents/parents-corner" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Parent's Corner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/parents/parents-resources" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                Parents Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/parents/testimonials" 
                exact activeClassName="active" 
                tag={RRNavLink} 
                onClick={toggleNavbar}
              >
                 Testimonials
              </NavLink>
            </li>
          </ul>
        </Collapse>
      </Navbar>
    </>
  );
};

export default MobileNav;