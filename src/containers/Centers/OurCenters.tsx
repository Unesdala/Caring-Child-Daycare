import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultOurCentersContent from './OurCentersContent';

export class OurCenters extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Our Centers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultOurCentersContent />
        </div>
      </>
    );
  }
}

export default OurCenters;
