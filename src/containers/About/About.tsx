import { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultAboutContent from './AboutContent';

export class About extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('About', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultAboutContent />
        </div>
      </>
    );
  }
}

export default About;
