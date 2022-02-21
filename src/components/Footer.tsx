import { Link } from 'react-router-dom';

const Footer = (): JSX.Element => (
  <footer className="main-footer">
    <div className="main-footer--locations">
      <h1>Locations</h1>
      <div className="main-footer--locations_buttons">
        <Link to="/daycare/locations/vinton-center" className="main-footer--locations_buttons--vinton btn btn-white">
          Vinton Center
        </Link>
        <Link to="/daycare/locations/460-center" className="main-footer--locations_buttons--460 btn btn-white">
          460 Center
        </Link>
        <Link to="/daycare/locations/parkway-center" className="main-footer--locations_buttons--parkway btn btn-white">
          Parkway Center
        </Link>
      </div>
    </div>
    <div className="main-footer--social">
      <a href="https://facebook.com">
        <i className="fab fa-facebook" />
      </a>
      <a href="https://twitter.com">
        <i className="fab fa-twitter" />
      </a>
    </div>
    <div className="main-footer--links">
      <Link to="/daycare/contact">Request a Tour</Link><span className="nb-space">|</span>
      <Link to="/daycare/contact">Contact Us</Link><span className="nb-space">|</span>
      <Link to="/daycare/privacy">Privacy</Link>
    </div>
    <div className="main-footer--logo">
      <img src="https://dl.dropboxusercontent.com/s/w9gkckfkvhw6tek/ccd_logo.jpg?dl=0" alt="Caring Child Daycare Logo" />
    </div>
  </footer>
);

export default Footer;
