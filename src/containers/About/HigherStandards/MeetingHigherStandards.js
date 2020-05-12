import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultHigherStandardsContent from './HigherStandardsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class About extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Meeting Higher Standards'); }

  render() {
    return (
      <div className="page-content">
        <main>
          <DefaultHigherStandardsContent />
        </main>
        <DefaultFooter />
      </div>
    );
  }
}

export default About;
