import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultFAQContent from './FAQContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class FAQ extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Frequently Asked Questions'); }

  render() {
    return (
      <div className="page-content">
        <main>
          <DefaultFAQContent />
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default FAQ;
