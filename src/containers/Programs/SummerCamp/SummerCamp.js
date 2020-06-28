import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultSummerCampContent from './SummerCampContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class SummerCamp extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Summer Camp'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultSummerCampContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default SummerCamp;
