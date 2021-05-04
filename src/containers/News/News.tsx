import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultNewsContent from './NewsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class News extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('News', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultNewsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default News;
