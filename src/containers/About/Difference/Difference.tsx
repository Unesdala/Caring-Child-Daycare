import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultDifferenceContent from './DifferenceContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class CaringChildDifference extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('The Caring Child Difference', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultDifferenceContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default CaringChildDifference;
