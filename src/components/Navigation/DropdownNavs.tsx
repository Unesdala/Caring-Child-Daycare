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
        <DropdownItem to="/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our Philosophy
        </DropdownItem>
        <DropdownItem to="/about/caring-child-history" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our History
        </DropdownItem>
        <DropdownItem to="/about/curriculum" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Our Curriculum
        </DropdownItem>
        <DropdownItem to="/about/faq" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
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
        <DropdownItem to="/programs/infants-and-toddlers" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Infants &amp; Toddlers
        </DropdownItem>
        <DropdownItem to="/programs/twos" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Twos
        </DropdownItem>
        <DropdownItem to="/programs/preschool" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Preschool
        </DropdownItem>
        <DropdownItem to="/programs/private-pre-k" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Private Pre-K
        </DropdownItem>
        <DropdownItem to="/programs/after-school" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          After School
        </DropdownItem>
        <DropdownItem to="/programs/summer-camp" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
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
        <DropdownItem to="/locations/vinton-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Vinton Center
        </DropdownItem>
        <DropdownItem to="/locations/460-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          460 Center
        </DropdownItem>
        <DropdownItem to="/locations/parkway-center" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
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
        <DropdownItem to="/parents/parents-corner" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Parent's Corner
        </DropdownItem>
        <DropdownItem to="/parents/parents-resources" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Parent's Resources
        </DropdownItem>
        <DropdownItem to="/parents/testimonials" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
          Testimonials
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { AboutNav, ProgramNav, LocationsNav, ParentsNav };