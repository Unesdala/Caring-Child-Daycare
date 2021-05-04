import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultCurriculumContent from './CurriculumContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Curriculum extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Curriculum', window.screen.width); }

  render(): JSX.Element {
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
