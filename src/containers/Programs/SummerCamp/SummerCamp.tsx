import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultSummerCampContent from './SummerCampContent';

export class SummerCamp extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Summer Camp', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultSummerCampContent />
        </div>
      </>
    );
  }
}

export default SummerCamp;
