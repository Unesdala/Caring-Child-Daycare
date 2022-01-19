import React, { RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { withResizeDetector } from 'react-resize-detector';
import DefaultCollapsableNav from './CollapsableNav';
import DefaultParentsNav, { ProgramsNav, AboutNav } from './DropdownNav';

interface NavigationProps {
  targetRef: RefObject<HTMLDivElement>;
  width: number;
}

export class Navigation extends React.Component<NavigationProps> {

  render(): JSX.Element {
    const { width, targetRef } = this.props;
    return (
      <div ref={targetRef}>
        {width <= 768
          ? (
            <DefaultCollapsableNav />
          ) : (
            <nav className="menu flex">
              <ul className="menu-nav">
                <li className="nav-item"><NavLink to="/daycare" className="nav-link" exact>Home</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/centers" className="nav-link">Our Centers</NavLink></li>
                <li className="nav-item"><AboutNav /></li>
                <li className="nav-item"><ProgramsNav /></li>
                <li className="nav-item"><DefaultParentsNav /></li>
                <li className="nav-item"><NavLink to="/daycare/news" className="nav-link">News</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/careers" className="nav-link">Careers</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/contact" className="nav-link">Contact Us</NavLink></li>
              </ul>
            </nav>
          )}
      </div>
    );
  }
}

export default withResizeDetector(Navigation);