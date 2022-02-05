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
          <NavLink to="/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>Our Philosophy</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/caring-child-history" tag={RRNavLink} onClick={toggle}>
            Our History
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/curriculum" tag={RRNavLink} onClick={toggle}>
            Our Curriculum
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

const ProgramNav = (): JSX.Element => {
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
        Caring Programs
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/programs/infants-and-toddlers" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Infants &amp; Toddlers.
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/twos" tag={RRNavLink} onClick={toggle}>
            Twos
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/preschool" tag={RRNavLink} onClick={toggle}>
            PreSchool
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/private-pre-k" tag={RRNavLink} onClick={toggle}>
            Private Pre-K
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/after-school" tag={RRNavLink} onClick={toggle}>
            After School
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/summer-camp" tag={RRNavLink} onClick={toggle}>
            Summer Camp
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const LocationsNav = (): JSX.Element => {
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
        Caring Locations
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/locations/vinton-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Vinton
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/locations/460-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            460 Center
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/locations/parkway-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Parkway Center
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const ParentsNav = (): JSX.Element => {
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
        The Parent's Corner
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/parents/parents-corner" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Parent's Corner
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/parents/parents-resources" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Parent's Resources
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/parents/testimonials" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Testimonials
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { AboutNav, ProgramNav, LocationsNav, ParentsNav };