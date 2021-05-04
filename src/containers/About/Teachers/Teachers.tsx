import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultTeachers from './TeachersContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Teachers extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Meet The Teachers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTeachers />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Teachers;
