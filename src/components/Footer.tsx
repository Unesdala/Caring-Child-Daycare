const Footer = (): JSX.Element => (
  <footer className="main-footer">
    <div className="main-footer--locations">
      <h1>Locations</h1>
      <div className="main-footer--locations_buttons">
        <button className="main-footer--locations_buttons--vinton">Vinton Center</button>
        <button className="main-footer--locations_buttons--460">460 Center</button>
        <button className="main-footer--locations_buttons--parkway">The Parkway Center</button>
      </div>
    </div>
    <div className="main-footer--social">
      <a href="#">
        <i className="fab fa-facebook" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
    </div>
    <div className="main-footer--links">
      <h1>Request A Tour | Contact Us | Privacy Policy</h1>
    </div>
    <div className="main-footer--logo">
      <h1>Logo</h1>
    </div>
  </footer>
);

export default Footer;
