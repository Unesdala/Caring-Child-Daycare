import { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultTestimonialsContent from './TestimonialsContent';

export class Testimonials extends Component {
  commonUtils: { setTitleAndScroll: (pageTitle: string, width: number) => void };

  constructor(props: Record<string, unknown>) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent Testimonials', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTestimonialsContent />
        </div>
      </>
    );
  }
}

export default Testimonials;
