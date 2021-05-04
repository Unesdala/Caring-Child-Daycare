import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultAboutContent from './AboutContent';

export class About extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('About Us', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAboutContent />
        </div>
      </>
    );
  }
}

export default About;
