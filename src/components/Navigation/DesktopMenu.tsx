import { NavLink } from 'react-router-dom';

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-nav">
          <li className="nav-item">
            <NavLink to="/daycare" className="nav-link" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" exact activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/programs" className="nav-link" exact activeClassName="active">
              Programs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/locations" className="nav-link" exact activeClassName="active">
              Locations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/parents" className="nav-link" exact activeClassName="active">
              Parents Corner
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className="nav-link" exact activeClassName="active">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/careers" className="nav-link" exact activeClassName="active">
              Careers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" exact activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopMenu;