import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultAfterSchoolContent from './AfterSchoolContent';

export class AfterSchool extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('After School', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAfterSchoolContent />
        </div>
      </>
    );
  }
}

export default AfterSchool;
