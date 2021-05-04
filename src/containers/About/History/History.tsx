import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultCaringChildHistoryContent from './HistoryContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class CaringChildHistory extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Caring Child Daycare\'s History', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCaringChildHistoryContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default CaringChildHistory;
