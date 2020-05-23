import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultNewsContent from './NewsContent';

export class News extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('News'); }

  render() {
    return (
      <div className="page-content">
        <DefaultNewsContent />
      </div>
    );
  }
}

export default News;
