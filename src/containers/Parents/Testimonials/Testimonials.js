import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultTestimonialsContent from './TestimonialsContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Parent Testimonials'); }

  render() {
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
