import { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultProgramsContent from './ProgramsContent';

export class Programs extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Programs', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultProgramsContent />
        </div>
      </>
    );
  }
}

export default Programs;
