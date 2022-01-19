import { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultNewsContent from './NewsContent';

export class News extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('News', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultNewsContent />
        </div>
      </>
    );
  }
}

export default News;
