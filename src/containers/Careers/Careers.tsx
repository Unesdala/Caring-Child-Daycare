import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultCareerContent from './CareersContent';

export class Career extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Careers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCareerContent />
        </div>
      </>
    );
  }
}

export default Career;
