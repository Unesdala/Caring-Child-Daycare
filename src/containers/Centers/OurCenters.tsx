import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultOurCentersContent from './OurCentersContent';
import DefaultFooter from '../../components/Footer/Footer';

export class OurCenters extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Our Centers', window.screen.width); }

  render(): JSX.Element {
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
