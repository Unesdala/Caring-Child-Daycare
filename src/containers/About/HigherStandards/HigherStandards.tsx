import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultHigherStandardsContent from './HigherStandardsContent';

export class HigherStandards extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Meeting Higher Standards', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultHigherStandardsContent />
        </div>
      </>
    );
  }
}

export default HigherStandards;
