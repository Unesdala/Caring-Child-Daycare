import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultHigherStandardsContent from './HigherStandardsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class HigherStandards extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Meeting Higher Standards', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultHigherStandardsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default HigherStandards;
