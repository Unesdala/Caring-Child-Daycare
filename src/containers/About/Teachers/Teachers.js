import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultTeachers from './TeachersContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class Teachers extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Meet The Teachers'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultTeachers />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default Teachers;
