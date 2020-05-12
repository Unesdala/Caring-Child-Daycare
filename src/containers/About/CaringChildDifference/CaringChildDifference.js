import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultCaringChildDifferenceContent from './CaringChildDifferenceContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class CaringChildDifference extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  render() {
    return (
      <div className="page-content">
        <main>
          <DefaultCaringChildDifferenceContent />
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default CaringChildDifference;
