import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactResizeDetector from 'react-resize-detector';
import DefaultCollapsableNav from './CollapsableNav';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.onResize = this.onResize.bind(this);
    this.state = { width: 320 };
  }

  onResize(width) {
    this.setState({ width });
  }

  render() {
    const { width } = this.state;
    return (
      <>
        {width <= 768 - 18 || width === 751
          ? (
            <DefaultCollapsableNav />
          ) : (
            <nav className="menu">
              <ul className="menu-nav">
                <li className="nav-item"><NavLink to="/daycare" className="nav-link" exact activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/centers" className="nav-link">Our Centers</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/about" className="nav-link">About Us</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/programs" className="nav-link">Programs</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/parents" className="nav-link">Parent&apos;s Corner</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/news" className="nav-link">News</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/careers" className="nav-link">Careers</NavLink></li>
                <li className="nav-item"><NavLink to="/daycare/contact" className="nav-link">Contact Us</NavLink></li>
              </ul>
            </nav>
          )}
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} targetDomEl={this.parentRef.current} />
      </>
    );
  }
}
