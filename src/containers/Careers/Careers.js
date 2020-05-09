import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultCareerContent from './CareersContent';

export class Career extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Careers'); }

  render() {
    return (
      <div className="page-content">
        <DefaultCareerContent />
      </div>
    );
  }
}

export default Career;
