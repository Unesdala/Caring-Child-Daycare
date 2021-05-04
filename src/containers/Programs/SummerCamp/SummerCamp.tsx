import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultSummerCampContent from './SummerCampContent';

export class SummerCamp extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Summer Camp', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultSummerCampContent />
        </div>
      </>
    );
  }
}

export default SummerCamp;
