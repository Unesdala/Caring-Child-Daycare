/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultAfterSchoolContent from './AfterSchoolContent';

export class AfterSchool extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('After School', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAfterSchoolContent />
        </div>
      </>
    );
  }
}

export default AfterSchool;
