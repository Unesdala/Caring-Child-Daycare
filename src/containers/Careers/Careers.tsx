import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultCareerContent from './CareersContent';

export class Career extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Careers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCareerContent />
        </div>
      </>
    );
  }
}

export default Career;
