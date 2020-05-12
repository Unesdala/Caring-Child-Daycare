import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultCaringChildHistory from './CaringChildHistoryContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class CaringChildHistory extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  render() {
    return (
      <div className="page-content">
        <main>
          <DefaultCaringChildHistory />
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default CaringChildHistory;
