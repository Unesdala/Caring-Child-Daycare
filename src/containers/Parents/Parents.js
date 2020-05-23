import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultParentsContent from './ParentsContent';

export class Parents extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Parent&apos;s Corner'); }

  render() {
    return (
      <div className="page-content">
        <DefaultParentsContent />
      </div>
    );
  }
}

export default Parents;
