import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultParentsContent from './ParentsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Parents extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Parent&apos;s Corner'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultParentsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Parents;
