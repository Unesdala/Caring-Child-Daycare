import React, { Component } from 'react';
import CommonUtils from '../../../lib/commonUtils';
import DefaultParentResourcesContent from './ParentResourcesContent';

export class ParentResources extends Component {
  public commonUtils: typeof CommonUtils = CommonUtils;

  componentDidMount(): void { this.commonUtils.setTitleAndScroll('Parent Resources', window.screen.width); }

  render(): JSX.Element {
    return (
      <>
        <div className="page-content">
          <DefaultParentResourcesContent />
        </div>
      </>
    );
  }
}

export default ParentResources;
