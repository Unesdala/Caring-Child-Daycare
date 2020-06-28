import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
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
      <>
        <div className="page-content">
          <DefaultTwosContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Twos;
