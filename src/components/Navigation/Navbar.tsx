import React, { RefObject } from 'react';
import { Navbar } from 'react-bootstrap';
import { withResizeDetector } from 'react-resize-detector';
import { NavLink } from 'react-router-dom';
import { AboutNav, ProgramNav, LocationsNav, ParentsNav } from './DropdownNavs';

interface NavigationProps {
  targetRef: RefObject<HTMLDivElement>;
  width: number;
}

export class Navigation extends React.Component<NavigationProps> {

  render(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { width, targetRef } = this.props;
    return (
      <div ref={targetRef} className="navigation">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav className="menu">
              <ul className="menu-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <AboutNav />
                <ProgramNav />
                <LocationsNav />
                <ParentsNav />
                <li className="nav-item">
                  <NavLink to="/careers/" className="nav-link" exact activeClassName="active">
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact/" className="nav-link" exact activeClassName="active">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withResizeDetector(Navigation);