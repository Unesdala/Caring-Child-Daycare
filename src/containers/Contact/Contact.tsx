import { Component } from 'react';
import commonUtils from '../../components/lib/commonUtils';
import DefaultContactContent from './ContactContent';

export class Contact extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Contact Us', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultContactContent />
        </div>
      </>
    );
  }
}

export default Contact;
