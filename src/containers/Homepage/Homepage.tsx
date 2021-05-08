import React, { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultHomeContent from './HomepageContent';

export class Homepage extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultHomeContent />
        </div>
      </>
    );
  }
}

export default Homepage;
