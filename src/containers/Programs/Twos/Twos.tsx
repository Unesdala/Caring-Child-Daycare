import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultTwosContent from './TwosContent';

export class Twos extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Twos', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTwosContent />
        </div>
      </>
    );
  }
}

export default Twos;
