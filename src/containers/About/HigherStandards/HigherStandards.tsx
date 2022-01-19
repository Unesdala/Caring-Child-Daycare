import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultHigherStandardsContent from './HigherStandardsContent';

export class HigherStandards extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Meeting Higher Standards', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultHigherStandardsContent />
        </div>
      </>
    );
  }
}

export default HigherStandards;
