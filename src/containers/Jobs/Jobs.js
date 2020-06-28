import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultJobsContent from './JobsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Job Descriptions'); }

  render() {
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
