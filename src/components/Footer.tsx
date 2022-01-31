const Footer = (): JSX.Element => (
  <footer className="main-footer">
    <div className="main-footer--locations">
      <h1>Locations</h1>
      <div className="main-footer--locations_buttons">
        <button className="main-footer--locations_buttons--vinton btn btn-white">Vinton Center</button>
        <button className="main-footer--locations_buttons--460 btn btn-white">460 Center</button>
        <button className="main-footer--locations_buttons--parkway btn btn-white">The Parkway Center</button>
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
      <button className="main-footer--links__tour btn btn-white">Request A Tour</button>
      <button className="main-footer--links__contact btn btn-white">Contact Us</button>
      <button className="main-footer--links__privacy btn btn-white">Privacy Policy</button>
    </div>
    <div className="main-footer--logo">
      <h1>Logo</h1>
    </div>
  </footer>
);

export default Footer;
