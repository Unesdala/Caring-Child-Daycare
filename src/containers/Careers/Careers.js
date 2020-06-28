import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultCareerContent from './CareersContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Career extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Careers'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultCareerContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Career;
