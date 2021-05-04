import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultJobsContent from './JobsContent';

export class Jobs extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Job Descriptions', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultJobsContent />
        </div>
      </>
    );
  }
}

export default Jobs;
