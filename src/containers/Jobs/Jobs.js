import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultJobsContent from './JobsContent';

export class Jobs extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Job Descriptions'); }

  render() {
    return (
      <div className="page-content">
        <DefaultJobsContent />
      </div>
    );
  }
}

export default Jobs;
