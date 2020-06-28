import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultPreSchoolContent from './PreSchoolContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class PreSchool extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Pre School'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultPreSchoolContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default PreSchool;
