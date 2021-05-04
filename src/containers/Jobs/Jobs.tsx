import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultJobsContent from './JobsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Jobs extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Job Descriptions', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultJobsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Jobs;
