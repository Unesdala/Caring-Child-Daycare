import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultTwosContent from './TwosContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Twos extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Twos', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTwosContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Twos;
