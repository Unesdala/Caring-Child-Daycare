import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultCurriculumContent from './CurriculumContent';

export class Curriculum extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Curriculum', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCurriculumContent />
        </div>
      </>
    );
  }
}

export default Curriculum;
