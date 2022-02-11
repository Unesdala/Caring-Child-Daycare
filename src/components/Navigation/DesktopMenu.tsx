import { NavLink } from 'react-router-dom';
import { AboutNav, LocationsNav, ParentsNav, ProgramNav } from './DropdownNavs';

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-nav">
          <li className="nav-item">
            <NavLink to="/daycare/" className="nav-link" exact activeClassName="active">
              Home
            </NavLink>
          </li>
            <AboutNav />
            <ProgramNav />
            <LocationsNav />
            <ParentsNav />
          <li className="nav-item">
            <NavLink to="/daycare/careers/" className="nav-link" exact activeClassName="active">
              Careers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/daycare/contact/" className="nav-link" exact activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopMenu;