import React, { Component } from 'react';
import commonUtils from '../../../lib/commonUtils';
import DefaultParentResourcesContent from './ParentResourcesContent';
import DefaultFooter from '../../../components/Footer/Footer';

export class ParentResources extends Component {
  constructor(props) {
    super(props);
    this.commonUtils = commonUtils;
  }

  componentDidMount() { this.commonUtils.setTitleAndScroll('Parent Resources'); }

  render() {
    return (
      <>
        <div className="page-content">
          <DefaultParentResourcesContent />
        </div>
        <DefaultFooter />
      </>
    );
  }
}

export default ParentResources;
