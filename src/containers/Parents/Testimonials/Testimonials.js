import React, { Component } from 'react';
import commonUtils from '../../../components/lib/commonUtils';
import DefaultTestimonialsContent from './TestimonialsContent';

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Parent Testimonials'); }

  render() {
    return (
      <div className="page-content">
        <DefaultTestimonialsContent />
      </div>
    );
  }
}

export default Testimonials;
