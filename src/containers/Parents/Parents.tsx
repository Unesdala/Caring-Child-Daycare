import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultParentsContent from './ParentsContent';

export class Parents extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent&apos;s Corner', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultParentsContent />
        </div>
      </>
    );
  }
}

export default Parents;
