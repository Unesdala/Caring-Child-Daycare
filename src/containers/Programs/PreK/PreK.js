import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultPreKContent from './PreKContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class PreK extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Private Pre-K'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultPreKContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default PreK;
