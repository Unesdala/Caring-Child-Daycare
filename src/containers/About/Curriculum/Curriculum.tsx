import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultCurriculumContent from './CurriculumContent';

export class Curriculum extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Curriculum', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultCurriculumContent />
        </div>
      </>
    );
  }
}

export default Curriculum;
