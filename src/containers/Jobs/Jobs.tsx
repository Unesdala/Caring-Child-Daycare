import { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultJobsContent from './JobsContent';

export class Jobs extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Job Descriptions', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultJobsContent />
        </div>
      </>
    );
  }
}

export default Jobs;
