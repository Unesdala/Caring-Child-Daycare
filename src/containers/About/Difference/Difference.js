import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultDifferenceContent from './DifferenceContent';
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
          <DefaultDifferenceContent />
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default CaringChildDifference;
