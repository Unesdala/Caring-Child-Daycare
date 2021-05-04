import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultHomeContent />
        </div>
      </>
    );
  }
}

export default Homepage;
