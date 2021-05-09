import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultDifferenceContent from './DifferenceContent';

export class CaringChildDifference extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('The Caring Child Difference', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultDifferenceContent />
        </div>
      </>
    );
  }
}

export default CaringChildDifference;
