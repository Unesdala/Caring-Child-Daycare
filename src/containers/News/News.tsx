// @ts-nocheck
import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultNewsContent from './NewsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class News extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('News', window.screen.width); }

  render() {
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
