import React, { Component } from 'react';
import commonUtils from '../../lib/commonUtils';
import DefaultProgramsContent from './ProgramsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Programs extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Programs'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultProgramsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Programs;
