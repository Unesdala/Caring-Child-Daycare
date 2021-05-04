import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultTestimonialsContent from './TestimonialsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Testimonials extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent Testimonials', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultTestimonialsContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Testimonials;
