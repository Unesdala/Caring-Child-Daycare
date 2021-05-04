import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultContactContent from './ContactContent';

export class Contact extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Contact Us', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultContactContent />
        </div>
      </>
    );
  }
}

export default Contact;
