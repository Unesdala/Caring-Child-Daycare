// @ts-nocheck
import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultOurCentersContent from './OurCentersContent';
import DefaultFooter from '../../components/Footer/Footer';

export class OurCenters extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Our Centers', window.screen.width); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultOurCentersContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default OurCenters;
