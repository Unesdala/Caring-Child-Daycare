import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultInfantsContent from './InfantsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Infants extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Infants & Toddlers'); }

  render() {
    return (
      <div className="page-content">
        <DefaultInfantsContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default Infants;
