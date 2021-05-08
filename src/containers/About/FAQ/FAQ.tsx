import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultFAQContent from './FAQContent';

export class FAQ extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Frequently Asked Questions', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultFAQContent />
        </div>
      </>
    );
  }
}

export default FAQ;
