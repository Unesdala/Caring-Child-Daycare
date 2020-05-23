import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultTwosContent from './TwosContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Twos extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Twos'); }

  render() {
    return (
      <div className="page-content">
        <DefaultTwosContent />
        <DefaultFooter />
      </div>
    );
  }
}

export default Twos;