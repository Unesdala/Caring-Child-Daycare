import React, { Component } from 'react';
import CommonUtils from '../../lib/commonUtils';
import DefaultProgramsContent from './ProgramsContent';
import DefaultFooter from '../../components/Footer/Footer';

export class Programs extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Programs', window.screen.width); }

  render(): JSX.Element {
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
