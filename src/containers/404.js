import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class FourOhFour extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-content">
        <div className="fof">404 - Page not available.</div>
        <Redirect to="/daycare" />
      </div>
    );
  }
}
