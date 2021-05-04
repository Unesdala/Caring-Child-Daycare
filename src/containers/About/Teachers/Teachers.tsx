import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultTeachers from './TeachersContent';

export class Teachers extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Meet The Teachers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTeachers />
        </div>
      </>
    );
  }
}

export default Teachers;
