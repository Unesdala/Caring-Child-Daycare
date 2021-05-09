import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultTeachers from './TeachersContent';

export class Teachers extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Teachers', window.screen.width); }

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
