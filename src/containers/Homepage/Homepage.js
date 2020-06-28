import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultHomeContent from './HomepageContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll(''); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultHomeContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Homepage;
