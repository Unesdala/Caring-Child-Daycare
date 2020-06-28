import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultAfterSchoolContent from './AfterSchoolContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class AfterSchool extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('After School'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultAfterSchoolContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default AfterSchool;
