import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
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
        <DropdownItem to="/daycare/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our Philosophy
        </DropdownItem>
        <DropdownItem to="/daycare/about/caring-child-history" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our History
        </DropdownItem>
        <DropdownItem to="/daycare/about/curriculum" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our Curriculum
        </DropdownItem>
        <DropdownItem to="/daycare/about/faq" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          FAQ
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
        Programs
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem to="/daycare/programs/infants-and-toddlers" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Infants &amp; Toddlers
        </DropdownItem>
        <DropdownItem to="/daycare/programs/twos" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Twos
        </DropdownItem>
        <DropdownItem to="/daycare/programs/preschool" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Preschool
        </DropdownItem>
        <DropdownItem to="/daycare/programs/private-pre-k" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Private Pre-K
        </DropdownItem>
        <DropdownItem to="/daycare/programs/after-school" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          After School
        </DropdownItem>
        <DropdownItem to="/daycare/programs/summer-camp" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Summer Camp
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
        Locations
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem to="/daycare/locations/vinton-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Vinton Center
        </DropdownItem>
        <DropdownItem to="/daycare/locations/460-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          460 Center
        </DropdownItem>
        <DropdownItem to="/daycare/locations/parkway-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Parkway Center
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
        <DropdownItem to="/daycare/parents/parents-corner" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Parent's Corner
        </DropdownItem>
        <DropdownItem to="/daycare/parents/parents-resources" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Parent's Resources
        </DropdownItem>
        <DropdownItem to="/daycare/parents/testimonials" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Testimonials
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { AboutNav, ProgramNav, LocationsNav, ParentsNav };