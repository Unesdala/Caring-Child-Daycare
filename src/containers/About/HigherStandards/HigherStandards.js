import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultHigherStandardsContent from './HigherStandardsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class HigherStandards extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Meeting Higher Standards'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultHigherStandardsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default HigherStandards;
