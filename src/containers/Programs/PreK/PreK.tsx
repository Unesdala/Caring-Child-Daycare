import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultPreKContent from './PreKContent';

export class PreK extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Private Pre-K', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultPreKContent />
        </div>
      </>
    );
  }
}

export default PreK;
