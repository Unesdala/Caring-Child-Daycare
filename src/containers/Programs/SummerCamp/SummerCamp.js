import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultSummerCampContent from './SummerCampContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class SummerCamp extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Twos'); }

  render() {
    return (
      <div className="page-content">
        <DefaultSummerCampContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default SummerCamp;
