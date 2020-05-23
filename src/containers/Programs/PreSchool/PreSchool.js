import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultPreSchoolContent from './PreSchoolContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class PreSchool extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Twos'); }

  render() {
    return (
      <div className="page-content">
        <DefaultPreSchoolContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default PreSchool;
