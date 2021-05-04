import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultAboutContent from './AboutContent';
import DefaultFooter from '../../components/Footer/Footer';

export class About extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('About Us', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAboutContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default About;
