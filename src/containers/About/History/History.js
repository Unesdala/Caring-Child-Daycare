import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
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
      <div className="page-content">
        <DefaultCaringChildHistoryContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default CaringChildHistory;
