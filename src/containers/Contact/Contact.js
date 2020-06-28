import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultContactContent from './ContactContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Contact Us'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultContactContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Contact;
