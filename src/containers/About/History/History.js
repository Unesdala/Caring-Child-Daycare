import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultCaringChildHistoryContent from './HistoryContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class CaringChildHistory extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Caring Child Daycare\'s History'); }

  render() {
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
