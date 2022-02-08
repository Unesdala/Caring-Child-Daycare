import { Nav, NavDropdown } from 'react-bootstrap';

const AboutNav = (): JSX.Element => {
  return (
    <>
        <Nav>
          <NavDropdown
            id="about-nav-dropdown"
            title="About Us"
          >
            <NavDropdown.Item href="/about">Our Philosophy</NavDropdown.Item>
            <NavDropdown.Item href="/about/caring-child-history">Our History</NavDropdown.Item>
            <NavDropdown.Item href="/about/curriculum">Our Curriculum</NavDropdown.Item>
            <NavDropdown.Item href="/about/faq">FAQ</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </>);
};

const ProgramNav = (): JSX.Element => {
  return (
    <>
        <Nav>
          <NavDropdown
            id="program-nav-dropdown"
            title="Programs"
          >
            <NavDropdown.Item href="/program/infants-and-toddlers">Infants &amp; Toddlers</NavDropdown.Item>
            <NavDropdown.Item href="/programs/twos">Twos</NavDropdown.Item>
            <NavDropdown.Item href="/programs/preschool">PreSchool</NavDropdown.Item>
            <NavDropdown.Item href="/programs/private-pre-k">Private Pre-K</NavDropdown.Item>
            <NavDropdown.Item href="/programs/after-school">After School</NavDropdown.Item>
            <NavDropdown.Item href="/programs/summer-camp">Summer Camp</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </>
  );
};

const LocationsNav = (): JSX.Element => {
  return (
    <>
        <Nav>
          <NavDropdown
            id="locations-nav-dropdown"
            title="Locations"
          >
            <NavDropdown.Item href="/locations/vinton-center">Vinton Center</NavDropdown.Item>
            <NavDropdown.Item href="/locations/460-center">460 Center</NavDropdown.Item>
            <NavDropdown.Item href="/locations/parkway-center">Parkway Center</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </>);
};

const ParentsNav = (): JSX.Element => {
  return (
    <>
        <Nav>
          <NavDropdown
            id="parents-nav-dropdown"
            title="Parent's Corner"
          >
            <NavDropdown.Item href="/parents/parents-corner">Parent's Corner</NavDropdown.Item>
            <NavDropdown.Item href="/parents/parents-resources">Parent's Resources</NavDropdown.Item>
            <NavDropdown.Item href="/parents/testimonials">Testimonials</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </>);
};

export { AboutNav, ProgramNav, ParentsNav, LocationsNav };