import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultPreSchoolContent from './PreSchoolContent';

export class PreSchool extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Pre-School', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultPreSchoolContent />
        </div>
      </>
    );
  }
}

export default PreSchool;
