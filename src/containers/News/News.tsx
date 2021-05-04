import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultNewsContent from './NewsContent';

export class News extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('News', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultNewsContent />
        </div>
      </>
    );
  }
}

export default News;
