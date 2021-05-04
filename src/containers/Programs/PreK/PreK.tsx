import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultPreKContent from './PreKContent';

export class PreK extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Private Pre-K', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultPreKContent />
        </div>
      </>
    );
  }
}

export default PreK;
