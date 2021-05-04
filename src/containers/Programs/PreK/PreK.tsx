import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultPreKContent from './PreKContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class PreK extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Private Pre-K', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultPreKContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default PreK;
