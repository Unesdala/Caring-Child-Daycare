import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultInfantsContent from './InfantsContent';

export class Infants extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Infants & Toddlers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultInfantsContent />
        </div>
      </>
    );
  }
}

export default Infants;
