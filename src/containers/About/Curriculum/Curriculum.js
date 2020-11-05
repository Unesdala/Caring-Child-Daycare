// @ts-nocheck
import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultCurriculumContent from './CurriculumContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Curriculum extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Curriculum', window.screen.width); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultCurriculumContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Curriculum;
