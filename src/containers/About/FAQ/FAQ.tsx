import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultFAQContent from './FAQContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class FAQ extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Frequently Asked Questions', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultFAQContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default FAQ;
