import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultCaringChildHistoryContent from './HistoryContent';

export class CaringChildHistory extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Caring Child Daycare&apos;s History', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCaringChildHistoryContent />
        </div>
      </>
    );
  }
}

export default CaringChildHistory;
