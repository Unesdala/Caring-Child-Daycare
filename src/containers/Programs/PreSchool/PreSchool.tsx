import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultPreSchoolContent from './PreSchoolContent';

export class PreSchool extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Pre School', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultPreSchoolContent />
        </div>
      </>
    );
  }
}

export default PreSchool;
