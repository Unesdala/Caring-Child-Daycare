import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultOurCentersContent from './OurCentersContent';

export class OurCenters extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Our Centers'); }

  render() {
    return (
      <div className="page-content">
        <DefaultOurCentersContent />
      </div>
    );
  }
}

export default OurCenters;
