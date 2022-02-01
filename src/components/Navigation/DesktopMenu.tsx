import { NavLink } from 'react-router-dom';
import { AboutNav, ProgramNav } from './DropdownNavs';

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact activeClassName="active">
              Home
            </NavLink>
          </li>
            <AboutNav />
            <ProgramNav />
          <li className="nav-item">
            <NavLink to="/locations" className="nav-link" exact activeClassName="active">
              Locations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/parents/" className="nav-link" exact activeClassName="active">
              Parents Corner
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news/" className="nav-link" exact activeClassName="active">
              News
            </NavLink>
          </li>
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
    </>
  );
};

export default DesktopMenu;