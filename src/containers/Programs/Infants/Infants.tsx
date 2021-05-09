import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultInfantsContent from './InfantsContent';

export class Infants extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Infants & Toddlers', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultInfantsContent />
        </div>
      </>
    );
  }
}

export default Infants;
