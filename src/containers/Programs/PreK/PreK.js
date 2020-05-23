import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultPreKContent from './PreKContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class PreK extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Twos'); }

  render() {
    return (
      <div className="page-content">
        <DefaultPreKContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default PreK;