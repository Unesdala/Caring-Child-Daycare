import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultParentsContent from './ParentsContent';

export class Parents extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent&apos;s Corner', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultParentsContent />
        </div>
      </>
    );
  }
}

export default Parents;
